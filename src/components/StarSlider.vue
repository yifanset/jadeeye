<template>
  <div class="star-slider">
    <input
      type="range"
      min="1"
      max="5"
      v-model="value"
      @input="updateStarPosition"
      ref="slider"
    />
    <div class="star" :style="{ left: starLeft + 'px' }">★</div>
    <div class="value">{{ value }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

const value = ref(1);
const slider = ref(null);
const starLeft = ref(0);

const updateStarPosition = () => {
  const sliderEl = slider.value;
  const percent = (value.value - sliderEl.min) / (sliderEl.max - sliderEl.min);
  const sliderWidth = sliderEl.offsetWidth;
  starLeft.value = percent * sliderWidth + sliderEl.offsetLeft;
};

onMounted(() => {
  updateStarPosition();
});

watch(value, updateStarPosition);
</script>

<style scoped>
.star-slider {
  position: relative;
  width: 410px;
  margin: 6px auto 0px auto;
  text-align: center;
  border-radius: 10px;
}

input[type=range] {
  width: 80%;
  -webkit-appearance: none;
  background: transparent;
}

input[type=range]::-webkit-slider-runnable-track {
  height: 12px;
  background: #eee;
  border-radius: 50px;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 50px;
  width: 50px;
  background: transparent;
  cursor: pointer;
}

.star {
  position: absolute;
  top: -28px;
  font-size: 50px;
  color: gold;
  pointer-events: none;
  transform: translateX(-50%);
  transition: left 0.2s ease;
}

.value {
  margin-top: 10px;
  font-weight: bold;
  font-size: 18px;
  color: white;
}
</style>