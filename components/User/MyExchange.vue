<template>
  <div class="container p-5">
    <p class="fs-4 text-primary mb-4">Exchange</p>
    <div class="row">
      <div class="col-md-12">
        <form class="row g-3 align-items-center flex">
          <div class="col-auto">
            <VueDatePicker v-model="formData.date" id="date-picker" date-picker placeholder="วันที่ทำรายการ" />
          </div>
          <div class="col-auto">
            <select class="form-select mx-2" v-model="formData.status">
              <option value="all" selected>ทั้งหมด</option>
              <option value="all">ที่ต้องจัดส่ง</option>
              <option value="all">จัดส่งแล้ว</option>
              <option value="all">สำเร็จ</option>
            </select>
          </div>
          <div class="col-auto">
            <button class="search-btn rounded-full mx-2" type="button"><i
                class="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </form>
      </div>
      <div class="col-md-12 mt-4">
        <div class="card">
          <div class="card-header">
            <div class="d-flex justify-content-between flex-grow-1">
              <span class="d-flex align-items-center gap-2">
                <i class="fa-solid fa-arrow-up ico me-2"></i>
                <span>แลกสินค้า</span>
              </span>
              <span class="d-flex align-items-center gap-2">
                <img src="/newimg/bb.png" alt="">
                <span>{{ formatNumber(2990) }}</span>
              </span>
            </div>
            <div class="d-flex justify-content-between align-items-center flex-grow-1">
                <span
                >Invoice No. 240049</span>
                <Icon icon="icon-park-solid:up-one" class="text-primary" width="20" height="20" />
            </div>
          </div>
          <div class="card-body">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import { formatNumber } from '#imports';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const date = ref({
  day: new Date().getDate(),
  month: new Date().getMonth(),
  year: new Date().getFullYear()
});

const formData = ref({
  status: 'all',
  date: new Date(date.value.year, date.value.month, date.value.day).toISOString().split('T')[0]
})

console.log(formData)

</script>

<style scoped>
.search-btn {
  background-color: #DB4444;
  border: 0;
  color: #FFF;
  padding: 0.7rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
}
.ico {
  background-color: #DB4444;
  color: #FFF;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.card-header {
  border-color: #DB4444;
  background-color: #FFF;
}
.card {
  border-color: #DB4444;
}
</style>
