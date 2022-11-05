<script setup lang="ts">
    import { toRef } from "vue";

    import RegularButton from "./RegularButton.vue";

    import { usePopup } from "../composables/popup";

    const props = defineProps({ isOpened: Boolean });
    const emits = defineEmits(["update:isOpened"]);

    const { opened, close } = usePopup({ isOpened: toRef(props, "isOpened"), emitter: emits });
</script>

<template>
    <Teleport to="body">
        <div v-if="opened" class="modal">
            <div class="title">Réserver la maison</div>

            <div class="footer">
                <RegularButton
                    text="Annuler"
                    type="secondary"
                    @click="close()"
                />

                <RegularButton
                    text="Réserver"
                    type="main"
                    @click="close()"/>
            </div>
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

    .title {
        margin-bottom: 16px;

        font-size: 24px;
    }

    .footer {
        display: flex;
        justify-content: space-between;
    }
</style>