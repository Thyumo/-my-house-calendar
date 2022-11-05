import { Ref, ref, toRefs, watch } from "vue";

export function usePopup(
    { isOpened, emitter }:
    {
        isOpened: Ref<boolean>;
        emitter: (eventName: "update:isOpened", ...arg: any[]) => void
    }) {
    const opened = ref(false);

    watch(isOpened, (newValue) => {
        if (opened.value === newValue) { return; }

        opened.value = newValue;
    })

    function open() {
        opened.value = true;
        emitter("update:isOpened", true);
    }

    function close() {
        opened.value = false;
        emitter("update:isOpened", false);
    }

    return { opened, close, open }
}