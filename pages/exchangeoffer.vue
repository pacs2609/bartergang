<template>
<section class="page pages exchangeoffer">
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <Breadcrumb :breadcrumb="[{ name: 'นำเสนอแลกเปลี่ยน', link: '#', isActived: true }]" />
            </div>
            <div class="col-md-12 mt-4 mb-2">
                <header class="mb-2">
                    <div class="row">
                        <div class="col-md-12">
                            <p class="text-primary fw-600"><span class="rectangle"></span>Exchange Offer</p>
                        </div>
                        <div class="col-md-12">
                            <p class="fs-3 fw-600">Product Data</p>
                        </div>
                    </div>
                </header>
            </div>
            <div class="col-md-12 d-flex justify-content-center align-items-center">
                <form action="" class="w-80">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="productname">ชื่อสินค้า</label>
                                <input type="text" v-model="productName" class="form-control" placeholder="ชื่อสินค้า">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="maincat">หมวดหมู่หลัก</label>
                                <select class="form-control" id="maincat" v-model="maincat">
                                    <option value="">เลือกหมวดหมู่หลัก</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="maincat">หมวดหมู่ย่อย</label>
                                <select class="form-control" id="subcat" v-model="subcat">
                                    <option value="">เลือกหมวดหมู่ย่อย</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="image">Upload Picture <span class="mx-2 text-muted">Add your file here, and you can upload up to 5 files max.</span></label>
                                <FileUpload />
                            </div>
                            <div class="form-group">
                                <p class="text-muted">Only support .jpg, png and .svg</p>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="">รายละเอียดสินค้า</label>
                                <textarea class="form-control" cols="30" rows="10" v-model="description" placeholder="รายละเอียดสินค้า"></textarea>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="">สภาพสินค้า</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" v-model="condition" id="flexRadioDefault1">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    มือหนึ่ง
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" v-model="condition" checked>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    มือสอง
                                </label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="">จำนวนสินค้า</label>
                                <QuantitySelector :max="1000" :min="1" :width="300" v-model="currentQuantity" @change="handleQuantityChange" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="">จำนวน BB ที่ต้องการ</label>
                                <input type="number" class="form-control" placeholder="จำนวน BB ที่ต้องการ" v-model="bbprice">
                            </div>
                        </div>
                        <div class="col-md-12 flex justify-end gap-5">
                            <button type="button" class="btn btn-secondary">Cancel</button>
                            <button type="button" class="btn btn-primary" @click="SendData">Sent Data</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
</template>

<script lang="ts" setup>
import Swal from 'sweetalert2';

definePageMeta({
    layout: 'default',
    title: 'นำเสนอแลกเปลี่ยน'
})

const authStore = useAuthStore();
const router = useRouter();

const currentQuantity = ref(10);
const handleQuantityChange = (newQuantity: number) => {
    currentQuantity.value = newQuantity;
};

interface FormData {
    productname: string;
    maincat: string;
    subcat: string;
    image: string;
    description: string;
    condition: string;
    quantity: number;
    bbprice: number;
}

const formData = reactive < FormData > ({
    productname: '',
    maincat: '',
    subcat: '',
    image: '',
    description: '',
    condition: '',
    quantity: currentQuantity.value,
    bbprice: 0
})

const {
    productName,
    maincat,
    subcat,
    image,
    description,
    condition,
    quantity,
    bbprice
} = toRefs(formData);

const SendData = () => {
    Swal.fire({
        title: 'Successfully',
        text: "Data sent successfully.",
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#DB4444',
        confirmButtonText: 'OK'
    })
}

onMounted(() => {
    if (authStore.token != null) {
        useAuthStore().initializeAuth();
    } else {
        router.push('/login');
    }
})
</script>

<style scoped>
.panel-heading {
    padding: 0.5rem;
}

.image-box {
    width: 100% !important;
    min-height: 300px !important;
}

.form-group {
    margin-bottom: 1rem;
}

/* .form-check-input {
width: 15px !important;
height: 15px !important;
} */

.form-check-input:checked {
    background-color: #DB4444;
    border-color: #DB4444;
    outline: 1px solid #DB4444;
    outline-offset: 0.20rem;
}

.form-check-input:focus {
    border-color: #FF7377;
    outline: 0;
    box-shadow: 0 0 0 .15rem rgba(255, 115, 120, 0.582);
}

.form-check-input:checked[type=radio] {
    background: #DB4444 !important;
    border-color: #DB4444 !important;
}

input[type=number] {
    -moz-appearance: textfield;
    max-width: 400px;
}

label {
    margin-bottom: 1rem;
}

.btn {
    padding: 0.5rem 4rem;
}

.btn-secondary {
    background-color: #FFF;
    color: #333;
    border-radius: 0.25rem;
    border: 0
}

form {
    max-width: 800px;
}
</style>
