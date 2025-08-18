<template>
  <div class="container p-5">
    <div class="row">
      <div class="col-md-12 d-flex justify-between">
        <span class="d-flex gap-3">
          <img src="/newimg/tmc.png">
          <span class="fw-500 fs-4 text-primary">{{ formatNumber(data.tmccoin) }}</span>
        </span>
        <span>
          <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#transferModal"><i class="fa-solid fa-rotate"></i> Transfer TMC</button>
        </span>
      </div>
      <div class="col-md-12">
        <hr>
      </div>
      <div class="col-md-12">
        <p class="text-primary">Wallet ID: 0000001</p>
      </div>
      <div class="col-md-12 d-flex align-items-center gap-3">
        <span>Transfer List</span>
        <input type="text" class="form-control" placeholder="Search" style="max-width: 250px;">
        <a class="btn search-btn"><i class="fa-solid fa-magnifying-glass"></i></a>
      </div>
      <div class="col-md-12 table-responsive">
        <table class="table mt-4">
          <thead>
            <tr>
              <th class="text-muted">วันที่ทำรายการ</th>
              <th class="text-muted text-center">กระเป๋าปลายทาง</th>
              <th class="text-muted text-center">เลขที่รายการ</th>
              <th class="text-muted text-end">จำนวน TMC</th>
            </tr>
          </thead>
          <tbody v-if="data.transferList">
            <tr v-for="(item,index) in data.transferList" :key="index">
              <td>{{ item.date }}</td>
              <td class="text-center">{{ item.transferto }}</td>
              <td class="text-center">{{ item.transferinvoice }}</td>
              <td class="text-end">{{ formatNumber(item.amount) }}</td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="4">ไม่มีรายการ</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
<!-- Modal -->
<div class="modal fade" id="transferModal" tabindex="-1" aria-labelledby="transferModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <p class="modal-title fs-2" id="transferModalLabel">Transfer TMC</p>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="card p-3">
          <div class="row">
            <div class="col-md-3">
              <img src="/newimg/tmcx95.png" style="width: 75px;">
            </div>
            <div class="col-md-9 d-flex flex-col">
              <span>กระเป๋าต้นทาง</span>
              <span class="fs-6 fw-300">Wallet ID: 0000001</span>
              <span class="text-primary fs-5">2,000 TMC</span>
            </div>
            <div class="col-md-9 offset-md-3 d-flex align-items-end justify-end">
              <span class="text-muted fs-7 d-flex gap-2 align-items-center"><Icon icon="fa6-solid:rotate" width="12" height="12" />ข้อมูล ณ เวลา 11:27 น.</span>
            </div>
          </div>
        </div>
        <div class="row mt-3 p-3">
          <div class="col-md-12">
            <p>กระเป๋าปลายทาง</p>
            <input type="text" class="form-control tmc-input text-end" placeholder="ระบุกระเป๋าปลายทาง">
          </div>
          <div class="col-md-12">
            <p>จำนวน</p>
            <div class="input-group mb-3">
              <input type="text" class="form-control tmc-input-value text-end" aria-label="จำนวน TMC" placeholder="จำนวน TMC">
              <span class="input-group-text">TMC</span>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-transparent" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary btn-transfer" @click="tranferTMC">Transfer</button>
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
import Swal from 'sweetalert2';
const authStore = useAuthStore()
const data = ref({
  tmccoin: authStore.user?.tmccoin,
  transferList: [
    {
      date: '10-10-68 16:37',
      transferto: '0000002',
      transferinvoice: '35555542',
      amount: 100
    },
    {
      date: '09-10-68 16:37',
      transferto: '0000003',
      transferinvoice: '35899723',
      amount: 200
    },
  ]
})

const tranferTMC = () => {
  Swal.fire({
    title: 'Successfully',
    icon : 'success',
    text : 'Transfer TMC successfully.',
    timer : 2000,
    showConfirmButton : false
  })
  
 closeModal()

}

const closeModal = () => {
  const modalElement = document.getElementById('transferModal');
  if (modalElement) {
    const modal = bootstrap.Modal.getInstance(modalElement);
    if (modal) {
      modal.hide();
    }
  }
};



</script>

<style scoped>
.search-btn {
  background-color: #DB4444;
  border: 0;
  color: #FFF !important;
  padding: 0.7rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
}
td {
  padding: 0.75rem !important;
  border: 0;
}

.tmc-input {
    background-color: transparent;
    border: 0;
    height: 3rem;
    padding: 0.5rem !important;
    font-size: 1rem;
    border-bottom: solid 1px #cccccc;
    border-radius: 0;
    margin-bottom: 1.5rem;
}

.tmc-input-value {
    background-color: transparent;
    color: #DB4444;
    border: 0;
    height: 3rem;
    padding: 0.5rem !important;
    font-size: 1.5rem;
    border-bottom: solid 1px #cccccc;
    border-radius: 0;
    margin-bottom: 1.5rem;
}

.tmc-input-value::placeholder {
  font-size: 1rem;
  display: flex;
  align-items: end;
}


.modal-header {
  border-bottom: 0;
}
.card {
  background-color: #f5f5f5;
  border: 0;
  border-radius: 0.5rem;
}

.input-group-text {
    display: flex;
    align-items: end;
    /* padding: .375rem .75rem; */
    font-size: 1rem;
    font-weight: 400;
    color: #DB4444;
    text-align: center;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
    border-bottom: solid 1px #cccccc;
    border-radius: 0;
    margin-bottom: 1.5rem;
}

.btn-transfer {
  padding: 0.75rem 4rem;
  margin-left: 1rem;
}

.modal-footer {
  border-top: 0;
}
</style>