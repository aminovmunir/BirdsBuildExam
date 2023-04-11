<template>
<div>
    <Header />
    <slot />
    <div class="loader-overlay" v-show="store.loading">
        <div class="r-1J">
            <div class="oTn-">
                <svg width="60" viewBox="0 0 142 151" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block;">
                    <path d="M142 21h-39v37z" fill="#300C68"></path>
                    <path d="M0 150L29 33 15 0h61c28 0 42 12 45 30s-7 31-17 36c19 0 38 11 38 37 0 35-30 47-54 47z" fill="url(#lg_purple)"></path>
                    <path d="M102 34a7 7 0 10-8 6 7 7 0 008-6z" fill="#300C68"></path>
                </svg>
            </div>
            <div class="_01Pn">
                <svg width="60" viewBox="0 0 142 151" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block;"><path d="M142 21h-39v37z" fill="#300C68"></path>
                    <path d="M0 150L29 33 15 0h61c28 0 42 12 45 30s-7 31-17 36c19 0 38 11 38 37 0 35-30 47-54 47z" fill="url(#lg_orange)"></path>
                    <path d="M102 34a7 7 0 10-8 6 7 7 0 008-6z" fill="#300C68"></path>
                </svg>
            </div>
        </div>
    </div>
    <svg style="position:absolute;width:0;height:0;">
        <defs>
            <linearGradient id="lg_orange" x1="98.8868" y1="35.9871" x2="3.18971" y2="154.146" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFC300"></stop><stop offset="1" stop-color="#FF0091"></stop>
            </linearGradient>
            <linearGradient id="lg_purple" x1="2.10443" y1="153.456" x2="98.8669" y2="36.3589" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4146BD"></stop><stop offset="1" stop-color="#FF00D0"></stop>
            </linearGradient>
        </defs>
    </svg>
</div>
</template>
<script lang="ts" setup>
import { useStore } from "@/store/";
const store = useStore()
</script>
<style scoped>
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.4);
}
.r-1J {
    height: calc(var(--bird-size) + var(--bird-size)*.4);
    position: relative;
    width: calc(var(--bird-size) + var(--bird-size)*.4)
}
.oTn- {
    -webkit-animation-name: oTn-;
    animation-name: oTn-;
    left: 0;
    top: 25%;
    z-index: 2
}

._01Pn,.oTn- {
    height: var(--bird-size);
    position: absolute;
    width: var(--bird-size)
}
._01Pn {
    -webkit-animation-name: _01Pn;
    animation-name: _01Pn;
    left: calc(100% - var(--bird-size)*.95);
    top: 0;
    z-index: 1
}

._01Pn,.oTn- {
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: ease;
    animation-timing-function: ease
}

@-webkit-keyframes oTn- {
    0% {
        transform: translate(0)
    }
    5% {
        transform: translate(calc(var(--bird-size)*-.5))
    }
    6% {
        z-index: 1
    }
    11% {
        transform: translate(calc(var(--bird-size)*.4),-33%);
        z-index: 1
    }
    50% {
        transform: translate(calc(var(--bird-size)*.4),-33%);
        z-index: 1
    }
    55% {
        transform: translate(var(--bird-size),-33%)
    }
    56% {
        z-index: 2
    }
    61% {
        transform: translate(0)
    }
    to {
        transform: translate(0)
    }
}

@keyframes oTn- {
    0% {
        transform: translate(0)
    }
    5% {
        transform: translate(calc(var(--bird-size)*-.5))
    }
    6% {
        z-index: 1
    }
    11% {
        transform: translate(calc(var(--bird-size)*.4),-33%);
        z-index: 1
    }
    50% {
        transform: translate(calc(var(--bird-size)*.4),-33%);
        z-index: 1
    }
    55% {
        transform: translate(var(--bird-size),-33%)
    }
    56% {
        z-index: 2
    }
    61% {
        transform: translate(0)
    }
    to {
        transform: translate(0)
    }
}

@-webkit-keyframes _01Pn {
    0% {
        transform: translate(0)
    }
    5% {
        transform: translate(calc(var(--bird-size)*.5))
    }
    6% {
        z-index: 2
    }
    11% {
        transform: translate(calc(var(--bird-size)*-.5),36%);
        z-index: 2
    }
    50% {
        transform: translate(calc(var(--bird-size)*-.5),36%);
        z-index: 2
    }
    55% {
        transform: translate(calc(var(--bird-size)*-1),36%)
    }
    56% {
        z-index: 1
    }
    61% {
        transform: translate(0)
    }
    to {
        transform: translate(0)
    }
}

@keyframes _01Pn {
    0% {
        transform: translate(0)
    }
    5% {
        transform: translate(calc(var(--bird-size)*.5))
    }
    6% {
        z-index: 2
    }
    11% {
        transform: translate(calc(var(--bird-size)*-.5),36%);
        z-index: 2
    }
    50% {
        transform: translate(calc(var(--bird-size)*-.5),36%);
        z-index: 2
    }
    55% {
        transform: translate(calc(var(--bird-size)*-1),36%)
    }
    56% {
        z-index: 1
    }
    61% {
        transform: translate(0)
    }
    to {
        transform: translate(0)
    }
}
</style>