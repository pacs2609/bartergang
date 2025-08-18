<template>
<div class="container p-5">
    <div class="row">
        <div class="col-md-12 d-flex justify-between mb-4">
            <span class="d-flex gap-3">
                <span class="fw-400 fs-4 text-primary">Voucher List</span>
            </span>
        </div>
        <div class="row">
            <div class="col-md-12 d-flex align-items-center mb-4 gap-3 voucher-box" v-for="voucher in voucherWithHoverState" :key="voucher.id">
                <div class="row w-full">
                    <div class="col-md-3 d-flex justify-content-center align-items-center">
                        <img src="/newimg/voucher.png" alt="">
                    </div>
                    <div class="col-md-6">
                        <p>Voucher Code : {{voucher.code}}</p>
                        <p class="text-primary fw-400">ส่วนลด {{voucher.value}} BB</p>
                        <p class="text-muted fs-7">ใช้ได้ถึง {{ voucher.expiredDate }}</p>
                    </div>
                    <div class="col-md-3 d-flex justify-end ">
                        <Icon icon="solar:copy-linear" width="24" height="24" class="text-primary cursor-pointer mt-2"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts" setup>
import {
    formatNumber
} from '@/utils/utils';
import {
    Icon
} from '@iconify/vue';
const authStore = useAuthStore()

interface Voucher {
    id: number,
        code: string,
        value: number,
        expiredDate: string;
}

const currentDate = new Date();
const day = String(currentDate.getDate()).padStart(2, '0');
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const year = currentDate.getFullYear();
console.log(day, month, year);

onMounted(() => {
    const router = useRouter()
    if (!authStore.token) {
        router.push({
            name: 'login'
        })
    }
})

const {
    data: voucherData
} = await useFetch < Voucher[] > ('/api/account/voucher');

const voucherWithHoverState: Ref < Voucher[] > = computed(() => {
    if (!voucherData.value) {
        return [];
    }
    const transformedVoucher = voucherData.value.filter(shop => shop.id > 0).map(voucherData => ({
        ...voucherData,
        isHovered: false
    }));
    return transformedVoucher;
});
</script>

<style scoped>
.voucher-box {
    padding: 1rem 1rem;
    border: solid 2px #DB4444;
    border-radius: 0.5rem;
}
</style>
