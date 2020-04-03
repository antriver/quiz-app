<template>
    <div id="home-hero">
        <div class="container">
            <div id="title-col">
                <div>
                    <img id="logo"
                         src="/assets/img/questicals.svg" />
                    <h2>Host a pub quiz remotely.</h2>
                </div>
            </div>
            <div id="screenshot-col">
                <div id="play-btn">
                    <div>
                        Ready to play?..
                        <br />
                        <router-link class="btn btn-primary btn-lg pulse"
                                     to="/join">
                            Join a Game
                        </router-link>
                    </div>
                </div>
                <img id="screenshots"
                     src="/assets/img/screenshots.png" />

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>

<style lang="less">
@import (less, reference) "../../less/app.less";

#home-hero {
    color: #fff;
    position: relative;
    overflow: hidden;

    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ff6b21+32,f7b733+100 */
    background: #ff6b21; /* Old browsers */
    background: -moz-linear-gradient(-45deg, #ff6b21 32%, #f7b733 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(-45deg, #ff6b21 32%, #f7b733 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(135deg, #ff6b21 32%, #f7b733 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff6b21', endColorstr='#f7b733',GradientType=1); /* IE6-9 fallback on horizontal gradient */

    > .container {
        z-index: 2;
        margin: auto;
        position: relative;
        padding: 60px 15px 0;
        text-align: center;
    }

    #title-col {
        padding-bottom: 30px;
    }

    #screenshot-col {
        .btn {
            margin-top: 10px;
            padding: 15px 30px;
            font-size: 20px;
        }
    }

    #play-btn {
        padding: 15px 0;
    }

    .col-md-7 {
        height: 100%;
    }

    .row > div {
        text-align: center;
    }

    #logo {
        width: 400px;
        max-width: 100%;
    }

    #screenshots {
        width: auto;
        max-width: 100%;
    }

    p {
        margin: 15px 0;
    }
}

@media (min-width: @screen-lg) {
    #home-hero {
        display: flex;
        align-items: stretch;
        justify-content: stretch;

        > .container {
            padding: 0;
            display: flex;
            align-items: stretch;
            justify-content: stretch;
            min-height: 70vh;
        }

        #title-col {
            flex-basis: 40%;
            margin-right: 50px;
            padding-bottom: 50px;

            display: flex;
            align-items: center;
            justify-content: center;
        }

        #screenshot-col {
            display: flex;
            align-items: stretch;
            justify-content: stretch;
            flex-direction: column;

            #play-btn {
                flex-grow: 1;
                flex-shrink: 0;

                display: flex;
                align-items: center;
                justify-content: center;

                padding: 50px 0 15px 0;
            }
        }

        #screenshots {
            max-width: 500px;
        }
    }
}
</style>
