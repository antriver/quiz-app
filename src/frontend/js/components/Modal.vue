<template>
    <div class="modal-container">
        <div class="modal">

            Hello world.

        </div>
    </div>
</template>

<script>

</script>

<style lang="less">
.modal-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, .4)
}

.modal {
    width: 90%;
    max-width: 500px;
    min-height: 200px;
    background: #fff;
    border-radius: 5px;
}
</style>
