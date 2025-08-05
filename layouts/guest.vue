<template>
<div>
    <header>
        <nav class="navbar navbar-default fixed-top">
            <div class="d-block d-sm-none w-100">
                <section class="d-flex justify-content-between top-xs">
                    <div class="top-xs-welcome">
                        <NuxtLink to="#"> </NuxtLink>
                    </div>
                    <div class="top-xs-welcome">
                        <NuxtLink to="/notice" class="notification">
                            <span><i class="fa fa-bell" aria-hidden="true"></i></span>
                            <span style="top:-2px; right:-2px;" class="notice_cnt">0</span>
                        </NuxtLink>
                    </div>
                    <div class="top-xs-bg">
                        <NuxtLink to="#"><i class="fa fa-rouble"></i> 0 BG</NuxtLink>
                    </div>
                    <div class="top-xs-cart">
                        <NuxtLink to="/cart"><i class="fa fa-cart"></i>
                            <span class="title-cart"> ตระกร้าของฉัน</span>
                            <span class="count-item">0 รายการ</span>
                            <span class="price"><b></b></span>
                        </NuxtLink>
                    </div>
                </section>
            </div>
            <div class="container d-block d-sm-none">
                <div class="navbar-header d-flex justify-content-between align-items-center w-100 py-2">
                    <NuxtLink class="navbar-brand" to="/"><img class="logo" src="/images/logo.png"></NuxtLink>
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <i class="fa fa-bars"></i>
                    </button>
                </div>

                <div class="navbar-collapse collapse" id="collapseExample" style="height: 1px;">
                    <div class="input-group stylish-input-group mt-2 mb-2 p-2">
                        <input type="text" name="kw" placeholder="ค้นหา..." value="" class="form-control" style="width: 80%;">
                        <span class="input-group-addon d-flex align-items-center">
                            <button class="btn-xs btn-nav-search" style="background: #fff !important;color:#333;"><i class="fa fa-search"></i></button>
                        </span>
                    </div>
                    <ul class="nav navbar-nav menu">
                        <li>
                            <NuxtLink to=""><i class="fa fa-home"></i></NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/recommend">รายการสินค้า</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/shop">ร้านค้า</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/about">เกี่ยวกับเรา</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/contact">ติดต่อเรา</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/howtouse">วีดีโอ</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/announce">นำเสนอแลกเปลี่ยน</NuxtLink>
                        </li>
                        <li class="dropdown visible-xs hidden-lg">
                            <NuxtLink to="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">สมาชิก <span class="caret"></span>
                            </NuxtLink>
                            <ul class="dropdown-menu">
                                <li>
                                    <NuxtLink to="/login">เข้าสู่ระบบ</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/register">สมัครสมาชิก</NuxtLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <section class="top d-none d-sm-block w-100">
                <div class="container header-top-area">
                    <div class="row d-flex justify-content-between">
                        <div class="col-md-3 col-xs-12">
                            <div class="header-top-left">
                                <span class="text-white"><i class="fa fa-phone" aria-hidden="true"></i> HOT LINE :
                                </span>
                                <NuxtLink to="tel:02-046-0372-3">02-046-0372-3</NuxtLink>
                            </div>
                        </div>
                        <div class="col-md-9 col-xs-12 d-flex justify-content-end">
                            <div class="header-top">
                                <NuxtLink to="/register"><i class="fa fa-user-plus"></i> สมัครสมาชิก</NuxtLink>
                                <NuxtLink to="/login"><i class="fa fa-sign-in"></i> เข้าสู่ระบบ</NuxtLink>
                                <NuxtLink to="/cart"><i class="fa fa-cart"></i>
                                    <span class="title-cart"><i class="fa fa-cart"></i> ตระกร้าของฉัน</span>
                                    <span class="count-item">0 รายการ</span>
                                    <span class="price"><b></b></span>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="container d-none d-sm-block">
                <div class="row d-flex align-items-center w-100 py-3">
                    <div class="col-md-2">
                        <div class="navbar-header">
                            <NuxtLink class="navbar-brand" to="/"><img class="logo" src="/images/logo.png">
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="input-group stylish-input-group">
                            <input type="text" name="kw" placeholder="ค้นหา..." value="" class="form-control" autocomplete="off" style="max-width: 200px;">
                            <span class="input-group-addon d-flex align-items-center">
                                <button class="btn-xs btn-nav-search" style="background: #fff !important;color:#333;"><i class="fa fa-search"></i></button>
                            </span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex justify-content-end align-items-center ml-auto gap-3">
                            <NuxtLink class="nav-btn fs-6" to="/"><i class="fa fa-home"></i></NuxtLink>
                            <NuxtLink class="nav-btn fs-6" to="/recommend">รายการสินค้า</NuxtLink>
                            <NuxtLink class="nav-btn fs-6" to="/shop">ร้านค้า</NuxtLink>
                            <NuxtLink class="nav-btn fs-6" to="/about">เกี่ยวกับเรา</NuxtLink>
                            <NuxtLink class="nav-btn fs-6" to="/contact">ติดต่อเรา</NuxtLink>
                            <NuxtLink class="nav-btn fs-6" to="/howtouse">วีดีโอ</NuxtLink>
                            <NuxtLink class="nav-btn fs-6" to="/announce">นำเสนอแลกเปลี่ยน</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <main>
        <slot />
    </main>
    <footer>
        <Footer></Footer>
    </footer>
</div>
</template>

<style scoped>
.dropdown-menu>li>a {
    display: block;
    padding: 3px 20px;
    clear: both;
    font-weight: 400;
    line-height: 1.42857143;
    color: #333;
    white-space: nowrap;
}
</style>
