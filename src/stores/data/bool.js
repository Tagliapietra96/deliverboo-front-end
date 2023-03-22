import {reactive} from 'vue';


export const bool = reactive({
    loading: Boolean,
    filtering: Boolean,
    popUpForcedExit: Boolean,
    popUpVisibility: Boolean,
    showChartPreview: Boolean,
    scroll: Boolean
}) 