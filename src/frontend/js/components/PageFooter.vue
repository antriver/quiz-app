<template>
    <footer>
        <div class="container">
            <a href="/privacy">Privacy Policy</a>
            &nbsp;
            |
            &nbsp;
            <a href="mailto:help@questicals.com">Contact</a>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'PageFooter'
};
</script>

<style lang="less">
    footer {
        background: rgba(76, 76, 76, 0.96);
        padding: 15px 0;
        text-align: center;
        color: #fff;

        a {
            color: #fff;
        }
    }
</style>
