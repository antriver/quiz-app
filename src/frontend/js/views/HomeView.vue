<template>
    <div id="home">
        <div id="home-hero">
            <div class="container">
                <div id="title-col">
                    <div>
                        <img id="logo"
                             src="/assets/img/questicals.svg" />
                        <h2>Host a pub quiz remotely for free.</h2>
                    </div>
                </div>
                <div id="screenshot-col">
                    <div>
                        <p>
                            Ready to play?..
                            <br />
                            <router-link class="btn btn-primary btn-lg pulse"
                                         to="/player">
                                Join a Game
                            </router-link>
                        </p>
                    </div>
                    <img id="screenshots"
                         src="/assets/img/screenshots.png" />

                </div>
            </div>
        </div>

        <section>
            <div class="container">
                <h2>How To Play</h2>
                <ul>
                    <li>Get together with your friends get together on Skype, Google Hangots, Zoom, or another video
                        chat service.
                    </li>
                    <li>Your quizmaster / host will start a game and tell you a password to join.</li>
                    <li>Your hosts reads questions aloud and sends the question to your device.</li>
                    <li>Answer by pressing the first letter of the answer.</li>
                    <li>There are bonus points for being the first person to get the answer correct!</li>
                </ul>
            </div>
        </section>

        <section>
            <div class="container">
                <div id="features">
                    <div>
                        <i class="fas fa-text fa-4x"></i>
                        <h3>Letter Questions</h3>
                        <p>Players answer with the first letter of the answer for 1 point.</p>
                    </div>

                    <div>
                        <i class="fas fa-sort-numeric-up fa-4x"></i>
                        <h3>Number Questions</h3>
                        <p>Players enter the answer on a number pad for 2 points.</p>
                    </div>

                    <div>
                        <i class="fas fa-check-square fa-4x"></i>
                        <h3>Multiple Choice</h3>
                        <p>Answer from A, B, C, or D for 1 point.</p>
                    </div>

                    <div>
                        <i class="fas fa-tachometer-alt-fastest fa-4x"></i>
                        <h3>Fastest Answer Bonus</h3>
                        <p>The first player to get the correct answer gets 1 bonus point.</p>
                    </div>

                    <div>
                        <i class="fas fa-people-arrows fa-4x"></i>
                        <h3>Closest Answer</h3>
                        <p>If nobody correctly answers a number question the players that guessed closest get 1
                            point.</p>
                    </div>

                    <div>
                        <i class="fas fa-user-cowboy fa-4x"></i>
                        <h3>Unlimited Players</h3>
                        <p>There's no limit to how many players can be in a game.</p>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <h2>How To Host</h2>

                <div class="row">
                    <div class="col-md-8">

                        <div class="text-center"
                             style="margin: 30px">
                            <router-link class="btn btn-primary btn-lg"
                                         to="/host">
                                Host A Game
                            </router-link>
                        </div>

                        <ul>
                            <li>Start a game with the <strong>Host A Game</strong> button above.</li>
                            <li>As quizmaster you are in control.</li>
                            <li>You can see the current scores on the first page.</li>
                            <li>Start a new question by selecting letters, numbers, or multiple choice.</li>
                            <li>Enter the correct answer so users can earn points if they get it right.</li>
                            <li>When you're ready for players to stat answering press <strong>Start Answering</strong>.</li>
                            <li>When time is up press <strong>Stop Answering</strong>. You'll see who answered and who was correct. Bonus points are awarded for the fastest player, and for the closest answer in a numbers question.</li>
                        </ul>
                    </div>
                    <div class="col-md-4">

                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<style lang="less">
@import (less, reference) "../../less/app.less";

#home {
    background: #fff;
    min-height: 100vh;

    section {
        p,
        li {
            line-height: 1.5;
        }

        ul {
            margin-top: 20px;
        }

        li {
            margin: 5px 0;
        }
    }

    section {
        .container {
            padding: 50px 0;
        }
    }

    section:nth-child(odd) {
        background: #f6f7eb;
    }
}

#home-hero {
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    color: #fff;
    position: relative;
    overflow: hidden;

    &:after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ff6b21+32,f7b733+100 */
        background: #ff6b21; /* Old browsers */
        background: -moz-linear-gradient(-45deg, #ff6b21 32%, #f7b733 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(-45deg, #ff6b21 32%, #f7b733 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(135deg, #ff6b21 32%, #f7b733 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff6b21', endColorstr='#f7b733',GradientType=1); /* IE6-9 fallback on horizontal gradient */

        z-index: 0;
    }

    > .container {
        z-index: 2;
        margin: auto;
        position: relative;
        padding: 0;

        display: flex;
        align-items: stretch;
        justify-content: stretch;

        text-align: center;
        min-height: 70vh;
    }

    #title-col {
        flex-basis: 40%;
        margin-right: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 50px;
    }

    #screenshot-col {
        align-self: flex-end;

        > img {
            margin-top: 50px;
        }

        .btn {
            margin-top: 10px;
            padding: 15px 30px;
            font-size: 20px;
        }
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
        max-width: 500px;
    }

    p {
        margin: 15px 0;
    }
}

#features {
    display: grid;
    text-align: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
}

/*@media (min-width: @screen-lg) {
    #home-hero {
        &:after {
            width: 200%;
            height: 200%;
            bottom: 0;
            left: 150px;
            transform: rotate(-7deg);
            border-radius: 100px;
            transform-origin: bottom left;
        }
    }
}*/
</style>
