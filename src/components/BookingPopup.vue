<script setup lang="ts">
    import { ref, toRef, watch } from "vue";
    import { usePopup } from "../composables/popup";

    const props = defineProps({ isOpened: Boolean });
    const emits = defineEmits(["update:isOpened"]);

    const { opened, close } = usePopup({ isOpened: toRef(props, "isOpened"), emitter: emits });
</script>

<template>
    <Teleport to="body">
        <div v-if="opened" class="modal">
            <p>Hello from the modal!</p>
            <button @click="close()">Close</button>
        </div>
    </Teleport>
</template>

<style scoped>
    .modal {
        position: fixed;
        z-index: 999;
        top: 20%;
        left: 50%;
        width: 300px;
        margin-left: -150px;
        padding: 30px;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 4px 16px #00000026;
    }
</style>
