<template>
<section class="pages pt-3 pb-5">
    <div class="container">
        <div class="row">
            <div class="col-md-3 bg-primary p-4">
                <p class="fs-6 fw-600">BB BigBarter</p>
                <ProductNav/>
            </div>
            <div class="col-md-9">
                <div class="row">
                    <div class="col-md-3 offset-md-9">
                        <Breadcrumb :breadcrumb="[{ name: 'สินค้า', link: 'products' }]" />
                    </div>
                    <div class="col-md-12">
                        <header class="mb-2 ms-5">
                            <div class="row">
                                <div class="col-md-12">
                                    <p class="text-primary fw-600"><span class="rectangle"></span>This Month</p>
                                </div>
                                <div class="col-md-8">
                                    <p class="fs-3">Best Selling Products</p>
                                </div>
                                <div class="col-md-3 d-flex justify-content-end">
                                    <select class="u-select form-control" aria-label="Default select example" v-model="selectValue">
                                        <option v-for="item in selectItem" :key="item" :value="item">{{ item }}</option>
                                    </select>
                                </div>
                                <div class="col-md-1 d-flex justify-content-end">
                                    <button class="btn btn-primary search"><Icon class="text-white" icon="ph:magnifying-glass" width="18" height="18" /></button>
                                </div>
                            </div>
                        </header>
                    </div>
                    <div class="col-md-12 p-5">
                        <div class="row">
                            <div class="col-md-4 product-box mb-4" v-for="product in productWithHoverState" :key="product.id">
                                <div class="d-flex justify-content-end" v-if="product.favourite">
                                    <a class="favourite-btn">
                                        <Icon class="favourite" icon="mdi:heart" /></a>
                                </div>
                                <div class="d-flex justify-content-end" v-if="!product.favourite">
                                    <a class="favourite-btn">
                                        <Icon icon="mdi:heart-outline" /></a>
                                </div>
                                <div class="d-flex justify-content-center align-items-center bg-light-gray p-2 product-card" @click="gotoProduct(product.id)">
                                    <img :src="product.img" class="img-responsive">
                                </div>
                                <p class="d-flex justify-content-start align-items-center mt-1 fw-600 mb-2">{{ product.title }}</p>
                                <div class="d-flex flex-column justify-content-start align-items-start mt-1 mb-2">
                                    <p class="d-flex w-100 justify-content-between align-items-center text-primary mt-1 fw-600 mb-2" v-if="product.bbprice > 0"><span>{{ product.bbprice }}</span><span>BB</span></p>
                                    <p class="d-flex w-100 justify-content-between align-items-center text-primary mt-1 fw-600 mb-2" v-if="product.tmcprice > 0"><span>{{ product.tmcprice }}</span><span>TMC</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script lang="ts" setup>
import {
    Icon
} from '@iconify/vue';
import { gotoProduct } from '@/utils/utils'
import Breadcrumb from '~/components/Breadcrumb.vue';
definePageMeta({
    layout: 'default',
})
const currencyFillter = ref('THB');
const selectItem = ref(['All','BB','TMC','BB&TMC']);
const selectValue = ref('All');


interface Product {
    id: number;
    title: string;
    img: string;
    shop: string;
    productCode: string;
    productPercent: number;
    quantity: number;
    bbprice: number;
    tmcprice: number;
    price: number;
    discount: string;
    discountPercent: number;
    newPrice: number;
    newProduct: string;
    favourite: boolean;
}

interface productWithHover extends Product {
    isHovered: boolean;
}

const {
    data: productData,
    pending,
    error
} = await useFetch < Product[] > ('/api/products/getallProduct');

const productWithHoverState: Ref < productWithHover[] > = computed(() => {
    if (!productData.value) {
        return [];
    }
    const transformedproduct = productData.value.map(product => ({
        ...product,
        isHovered: false
    }));
    // console.log('productsWithHoverState computed:', transformedproduct);
    return transformedproduct;
});
</script>

<style scoped>
svg {
    width: 22px;
    height: 22px;
}

.product-card {
    height: 200px;
    margin-bottom: 1rem;
    padding: 1rem;
}

.product-card img {
    width: 100%;
    max-width: 130px;
    height: 100%;
    object-fit: contain;
    border-radius: 0.5rem;
}

.product-box {
    padding: 0rem 2rem;
}

.favourite-btn {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-right: 5px;
    padding: 0.3rem;
    width: 30px;
    height: 30px;
    background-color: #FFF;
    color: #000;
    border-radius: 50%;
    cursor: pointer;
}

.favourite {
    color: #DB4444;
}
.search {
    border-radius: 50% !important;
    width: 40px !important;
    height: 40px !important;
    padding: 0 !important;
    margin: 0 !important;

}
.u-select {
  display: flex;
  justify-content: start;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background-color: #FFF;
  color: #DB4444;
  border: solid 1px #c9c9c9;
  max-width: 150px;
}
</style>
