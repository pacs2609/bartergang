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
                        <Breadcrumb :breadcrumb="[{ name: 'ร้านค้า', link: 'shop' }]" />
                    </div>
                    <div class="col-md-12 p-5">
                        <div class="row">
                            <div class="col-md-4 shop-box" v-for="shop in shopWithHoverState" :key="shop.id">
                                <div class="d-flex justify-content-end" v-if="shop.favourite">
                                    <a class="favourite-btn"><Icon class="favourite" icon="mdi:heart"/></a>
                                </div>
                                <div class="d-flex justify-content-end" v-if="!shop.favourite">
                                    <a class="favourite-btn"><Icon icon="mdi:heart-outline"/></a>
                                </div>
                                <div class="d-flex justify-content-center align-items-center bg-light-gray p-2 shop-card">
                                    <img :src="'/newimg/brand' + shop.image" class="img-responsive">
                                </div>
                                <p class="d-flex justify-content-center align-items-center mt-1 fw-600 mb-4">{{ shop.name }}</p>
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
import Breadcrumb from '~/components/Breadcrumb.vue';
definePageMeta({
    layout: 'default',
})

interface Shop {
    id: number;
    name: string;
    image: string;
    favourite: boolean;
}

interface ShopWithHover extends Shop {
    isHovered: boolean;
}

const {
    data: shopData,
    pending,
    error
} = await useFetch < Shop[] > ('/api/getshop');

const shopWithHoverState: Ref < ShopWithHover[] > = computed(() => {
    if (!shopData.value) {
        return [];
    }
    const transformedShop = shopData.value.map(shop => ({
        ...shop,
        isHovered: false
    }));
    // console.log('productsWithHoverState computed:', transformedShop);
    return transformedShop;
});
</script>

<style scoped>
svg {
    width: 22px;
    height: 22px;
}

.shop-card {
    height: 200px;
    margin-bottom: 1rem;
    padding: 1rem;
}
.shop-card img {
    width: 100%;
    max-width: 130px;
    height: 100%;
    object-fit: contain;
    border-radius: 0.5rem;
}
.shop-box {
    padding: 0rem 2rem;
}
.favourite-btn {
    position: absolute;
    margin-top: 5px;
    margin-right: 5px;
    padding: 0.3rem;
    background-color: #FFF;
    color: #000;
    border-radius: 50%;
    cursor: pointer;
}
.favourite {
    color: #DB4444;
}
</style>
