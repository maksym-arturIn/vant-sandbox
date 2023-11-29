<template>
  <div class="index-navbar">
    <div class="index-navbar__header">
      <button class="index-navbar__control" @click="scrollNavHandler(false)">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff" height="15px" width="15px" version="1.1" id="Capa_1" viewBox="0 0 490 490" xml:space="preserve">
          <path d="M413.476,398.302L258.215,245L413.476,91.69L324.619,0L76.524,245l248.094,245L413.476,398.302z M120.086,245L324.14,43.502  l46.252,47.71L214.653,245l155.739,153.781l-46.252,47.717L120.086,245z"/>
        </svg>
      </button>

      <div id="vant-index-bar-header" class="index-navbar__nav" ref="categoriesTitleList" />

      <button class="index-navbar__control" data-direction="right" @click="scrollNavHandler(true)">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff" height="15px" width="15px" version="1.1" id="Capa_1" viewBox="0 0 490 490" xml:space="preserve">
          <path d="M413.476,398.302L258.215,245L413.476,91.69L324.619,0L76.524,245l248.094,245L413.476,398.302z M120.086,245L324.14,43.502  l46.252,47.71L214.653,245l155.739,153.781l-46.252,47.717L120.086,245z"/>
        </svg>
      </button>
    </div>
    
    <van-index-bar 
      v-if="isMounted"
      :index-list="categoryLabels" 
      teleport="#vant-index-bar-header"
      @change="activeCategory = $event"
    >
      <template v-for="category in props.dataList" :key="category.id">
        <van-index-anchor :index="category.label" class="index-navbar__anchor">
          {{ category.label }}
        </van-index-anchor >
        
        <van-cell v-for="product in category.products" :key="product.id" >
          <div class="index-navbar__cell" >
            <h3 class="index-navbar__name">{{ product.name }}</h3>
            <img :src="product.img" class="index-navbar__img" />
            <p class="index-navbar__description">{{ product.description }}</p>
          </div>
        </van-cell>
      </template>
    </van-index-bar>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue';
import type { IndexBarInstance } from 'vant';

const props = withDefaults(defineProps<{ dataList: {
  id: number,
  label: string; 
  products: {
    id: number;
    name: string;
    description: string;
    img: string;
  }[]
}[]}>(), { dataList: () => [] })

const indexBarRef = ref<IndexBarInstance>();
const categoriesTitleList = ref()
const isMounted = ref(false)
const categoryLabels = computed(() => props.dataList.map((category) => category.label))
const activeCategory = ref(categoryLabels.value[0])

const scrollNavHandler = (direction: boolean) => {
  const activeCategoryElement = categoriesTitleList.value.querySelector('.van-index-bar__index--active');
  const sidebar = categoriesTitleList.value.querySelector('.van-index-bar__sidebar');

  const offset = Number(sidebar?.scrollLeft) + (Number(activeCategoryElement?.offsetWidth + 25) * (direction ? 1 : -1))
  
  sidebar.scrollTo({
    left: Math.max(offset, 0),
    behavior: "smooth",
  });
}

const handleChangeActiveCategory = () => {
  const activeCategoryElement = categoriesTitleList.value.querySelector('.van-index-bar__index--active');
  const sidebar = categoriesTitleList.value.querySelector('.van-index-bar__sidebar');
  
  sidebar.scrollTo({
    left: Number(activeCategoryElement?.offsetLeft) ,
    behavior: "smooth",
  });
}

watch(activeCategory, (newValue) => {
  indexBarRef.value?.scrollTo(newValue);
  handleChangeActiveCategory()
}, { flush: 'post' })

onMounted(() => {
  isMounted.value = true;
})
</script>

<style lang="scss" scoped>
.index-navbar{
  position: relative;
  
  &__header {
    position: sticky;
    top: 0;
    left: 0;
    overflow-x: hidden;
    background: var(--van-index-anchor-sticky-background);
    display: grid;
    grid-template-columns: 40px 1fr 40px;
    align-items: center;
    max-width: 100%;
    z-index: 100;
    
    ::v-deep(.van-index-bar__sidebar) {
      position: relative;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      flex-direction: row;
      overflow-x: auto;
      max-width: 100%;
      gap: 25px;
      height: 60px;  
      padding: 15px;
      transform: none;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */

      &::-webkit-scrollbar {
        display: none;
      }
    }
    
    ::v-deep(.van-index-bar__index) {
      flex-shrink: 0;
      font-size: 20px;
      padding: 0;
    }
  }
  
  &__nav {
    overflow-x: hidden;
  }
  
  &__control {
    background: #000;
    color: white;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    border: none;
    justify-self: center;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &[data-direction="right"] {
      transform: rotate(180deg);
    }
  }
  
  &__cell {
    padding: 40px 15px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px
  }

  &__name {
    flex: 1 0 100%;
    text-align: start;
  }

  &__img {
    display: block;
    object-fit: cover;
    height: 120px;
    min-width: 120px;
    border-radius: 12px;
    flex: 1 1 40%;
  }

  &__description {
    flex: 1 1 50%;
    min-width: 300px;
    text-align: justify;
  }
}
</style>
