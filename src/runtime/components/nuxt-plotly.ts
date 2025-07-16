// nuxt-img.ts
import {
  h,
  defineComponent,
  reactive,
  onBeforeUnmount,
  onMounted,
  watch,
  type PropType,
} from "vue";
import { v4 as uuidv4 } from "uuid";
import Plotly from "plotly.js-dist-min";

export type NuxtPlotlyData = Array<Plotly.Data>;
export type NuxtPlotlyConfig = Partial<Plotly.Config>;
export type NuxtPlotlyLayout = Partial<Plotly.Layout>;
export type NuxtPlotlyHTMLElement = Partial<Plotly.PlotlyHTMLElement>;

export default defineComponent({
  props: {
    data: { type: Array as PropType<NuxtPlotlyData>, required: true },
    config: {
      type: Object as PropType<NuxtPlotlyConfig>,
      required: false,
      default: undefined,
    },
    layout: {
      type: Object as PropType<NuxtPlotlyLayout>,
      required: false,
      default: undefined,
    },
  },
  emits: ["on-ready"],
  setup(props, ctx) {
    const datas = reactive({
      plotlyId: `plotly-${uuidv4()}`,
      resizeObserver: {} as ResizeObserver,
      timeOutFunctionId: {} as NodeJS.Timeout,
      plotlyHTMLElement: {} as NuxtPlotlyHTMLElement,
    });

    const setGraph = async () => {
      datas.plotlyHTMLElement = await Plotly.newPlot(
        datas.plotlyId,
        props.data,
        props.layout,
        props.config
      );

      ctx.emit("on-ready", datas.plotlyHTMLElement);
    };

    const setResizeObserver = () => {
      datas.resizeObserver = new ResizeObserver(() => {
        // debounce the reset
        clearTimeout(datas.timeOutFunctionId);
        datas.timeOutFunctionId = setTimeout(() => {
          setGraph();
        }, 100);
      });
      const plotlyElm = document.getElementById(datas.plotlyId);
      if (plotlyElm) {
        datas.resizeObserver.observe(plotlyElm);
      }
    };

    // the plotly component is running only on the client-side
    onMounted(() => {
      setGraph();
      setResizeObserver();
    });

    // reset graph when props change
    watch(
      () => [props.data, props.layout, props.config],
      () => {
        setGraph();
      },
      { deep: true }
    );

    onBeforeUnmount(() => {
      datas.resizeObserver.disconnect();
    });

    return () => h("div", { id: datas.plotlyId });
  },
});
