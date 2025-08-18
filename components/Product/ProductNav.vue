<template>
<div class="row">
    <div class="col-md-12">
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
                <Icon class="text-white" icon="ph:magnifying-glass" width="18" height="18" />
            </span>
            <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1">
        </div>
    </div>
    <div class="col-md-12">
        <ul class="list-unstyled">
            <li>
                <Icon icon="material-symbols-light:home-outline" />สินค้าทั้งหมด
            </li>
            <li>
                <Icon icon="mdi:compass-outline" />เสื้อผ้าแฟชั่นและเครื่องประดับ
            </li>
            <li>
                <Icon icon="mingcute:baby-line" />สินค้าแม่และเด็ก
            </li>
            <li>
                <Icon icon="gravity-ui:persons" />สุขภาพและความงาม
            </li>
            <ul class="list-unstyled ps-4 show">
                <li class="nav-item">
                    <a href="#">อาหารเสริม</a>
                </li>
                <li class="nav-item">
                    <a href="#">อุปกรณ์ดูสุขภาพ</a>
                </li>
                <li class="nav-item">
                    <a href="#">เครื่องสำอางและครีมบำรุง</a>
                </li>
            </ul>
            <li>
                <Icon icon="cib:adguard" />อุปโภค บริโภค
            </li>
            <li>
                <Icon icon="material-symbols:home-and-garden" />บ้านและสวน
            </li>
            <li>
                <Icon icon="arcticons:electron" style="stroke-width: 3px;" />เครื่องใช้ไฟฟ้า
            </li>
            <ul class="list-unstyled ps-4 show">
                <li class="nav-item">
                    <a href="#">มือถือและอุปกรณ์ถ่ายภาพ</a>
                </li>
                <li class="nav-item">
                    <a href="#">กีฬาและงานอดิเรก</a>
                </li>
                <li class="nav-item">
                    <a href="#">รถยนต์และประดับยนต์</a>
                </li>
                <li class="nav-item">
                    <a href="#">อื่นๆ</a>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/auction/product">ประมูล</NuxtLink>
                </li>
                <li class="nav-item">
                    <a href="#">Voucher</a>
                </li>
            </ul>
        </ul>
    </div>
</div>
</template>

<script lang="ts" setup>
import {
    Icon
} from '@iconify/vue';
</script>

<style scoped>
svg {
    width: 22px;
    height: 22px;
}

.input-group-text {
    background-color: #FF8184 !important;
    border: 0 !important;
    border-radius: 0.5rem 0rem 0rem 0.5rem !important;
    color: #fff !important;
}

input {
    background-color: #FF8184 !important;
    border: 0 !important;
    color: #fff !important;
}

input::placeholder {
    color: #fff !important;
}

li {
    gap: 5px;
    padding: 0.75rem 1rem;
    display: flex;
    cursor: pointer;
    border-radius: 0.5rem;
}
.list-unstyled ul li a {
    color: #ffffff;
    line-height: 25px;
    padding-left: 15px;
    position: unset;
    transition: all 300ms ease-in-out 0s;
}

li:hover {
    background-color: #ffffff;
    color: #FF8184;
    transition: all 300ms ease-in-out 0s;
}

a:hover {
  color: #DB4444 !important;
}
</style>
