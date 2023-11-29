<script setup lang="ts">
import IndexNavbar from "@/components/IndexNavbar.vue"

const dataList = [
{ 
  label: "Category A", 
  id: 1,
  products: [
  { id: 123,  name: 'Product 1', description: " Product 1 description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis fuga sint libero unde illo, dolores nulla accusantium iusto. Quidem est soluta laudantium eos temporibus ut quos nesciunt, inventore reiciendis animi.", img: "http://via.placeholder.com/640x360"},
  { id: 123456,  name: 'Product 1', description: " Product 1 description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis fuga sint libero unde illo, dolores nulla accusantium iusto. Quidem est soluta laudantium eos temporibus ut quos nesciunt, inventore reiciendis animi.", img: "http://via.placeholder.com/640x360"},
  { id: 123456789,  name: 'Product 1', description: " Product 1 description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis fuga sint libero unde illo, dolores nulla accusantium iusto. Quidem est soluta laudantium eos temporibus ut quos nesciunt, inventore reiciendis animi.", img: "http://via.placeholder.com/640x360"}
  ]
},
{
  label: "Category B",
  id: 2,
  products: [
  { id: 2123,  name: 'Product 1', description: " Product 1 description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis fuga sint libero unde illo, dolores nulla accusantium iusto. Quidem est soluta laudantium eos temporibus ut quos nesciunt, inventore reiciendis animi.", img: "http://via.placeholder.com/640x360"},
  { id: 2123456,  name: 'Product 1', description: " Product 1 description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis fuga sint libero unde illo, dolores nulla accusantium iusto. Quidem est soluta laudantium eos temporibus ut quos nesciunt, inventore reiciendis animi.", img: "http://via.placeholder.com/640x360"},
  { id: 2123456789,  name: 'Product 1', description: " Product 1 description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis fuga sint libero unde illo, dolores nulla accusantium iusto. Quidem est soluta laudantium eos temporibus ut quos nesciunt, inventore reiciendis animi.", img: "http://via.placeholder.com/640x360"}
  ]
},
{
  label: "Category C",
  id: 3,
  products: [
  { id: 3123,  name: 'Product 1', description: " Product 1 description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis fuga sint libero unde illo, dolores nulla accusantium iusto. Quidem est soluta laudantium eos temporibus ut quos nesciunt, inventore reiciendis animi.", img: "http://via.placeholder.com/640x360"},
  { id: 3123456,  name: 'Product 1', description: " Product 1 description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis fuga sint libero unde illo, dolores nulla accusantium iusto. Quidem est soluta laudantium eos temporibus ut quos nesciunt, inventore reiciendis animi.", img: "http://via.placeholder.com/640x360"},
  { id: 3123456789,  name: 'Product 1', description: " Product 1 description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis fuga sint libero unde illo, dolores nulla accusantium iusto. Quidem est soluta laudantium eos temporibus ut quos nesciunt, inventore reiciendis animi.", img: "http://via.placeholder.com/640x360"}
  ]
},
{
  label: "Category Ddlkgmlsdfglsmfsdm",
  id: 4,
  products: [
  { id: 4123,  name: 'Product 1', description: " Product 1 description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis fuga sint libero unde illo, dolores nulla accusantium iusto. Quidem est soluta laudantium eos temporibus ut quos nesciunt, inventore reiciendis animi.", img: "http://via.placeholder.com/640x360"},
  { id: 4123456,  name: 'Product 1', description: " Product 1 description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis fuga sint libero unde illo, dolores nulla accusantium iusto. Quidem est soluta laudantium eos temporibus ut quos nesciunt, inventore reiciendis animi.", img: "http://via.placeholder.com/640x360"},
  { id: 4123456789,  name: 'Product 1', description: " Product 1 description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis fuga sint libero unde illo, dolores nulla accusantium iusto. Quidem est soluta laudantium eos temporibus ut quos nesciunt, inventore reiciendis animi.", img: "http://via.placeholder.com/640x360"}
  ]
},
{
  label: "Category E",
  id: 5,
  products: [
  { id: 5123,  name: 'Product 1', description: " Product 1 description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis fuga sint libero unde illo, dolores nulla accusantium iusto. Quidem est soluta laudantium eos temporibus ut quos nesciunt, inventore reiciendis animi.", img: "http://via.placeholder.com/640x360"},
  { id: 5123456,  name: 'Product 1', description: " Product 1 description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis fuga sint libero unde illo, dolores nulla accusantium iusto. Quidem est soluta laudantium eos temporibus ut quos nesciunt, inventore reiciendis animi.", img: "http://via.placeholder.com/640x360"},
  { id: 5123456789,  name: 'Product 1', description: " Product 1 description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis fuga sint libero unde illo, dolores nulla accusantium iusto. Quidem est soluta laudantium eos temporibus ut quos nesciunt, inventore reiciendis animi.", img: "http://via.placeholder.com/640x360"}
  ]
},
{
  label: "Category F",
  id: 6,
  products: [
  { id: 6123,  name: 'Product 1', description: " Product 1 description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis fuga sint libero unde illo, dolores nulla accusantium iusto. Quidem est soluta laudantium eos temporibus ut quos nesciunt, inventore reiciendis animi.", img: "http://via.placeholder.com/640x360"},
  { id: 6123456,  name: 'Product 1', description: " Product 1 description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis fuga sint libero unde illo, dolores nulla accusantium iusto. Quidem est soluta laudantium eos temporibus ut quos nesciunt, inventore reiciendis animi.", img: "http://via.placeholder.com/640x360"},
  { id: 6123456789,  name: 'Product 1', description: " Product 1 description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis fuga sint libero unde illo, dolores nulla accusantium iusto. Quidem est soluta laudantium eos temporibus ut quos nesciunt, inventore reiciendis animi.", img: "http://via.placeholder.com/640x360"}
  ]
},
]
</script>

<template>
  <main class="page">
    <IndexNavbar :dataList="dataList" />
  </main>
</template>

<style scoped lang="scss">
.page {
  height: 100dvh;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
}
</style>
