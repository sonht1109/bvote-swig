{%extends 'layouts/base.swig' %}
{% block pageTitle %} Biệt thự trên cao Forest in the Sky  {% endblock %}
{% block bodyClass %}contact{% endblock %}
{% block content %}
    <main id="contact">
        <section id="section-contact-banner">
            <div class="contact-banner">
                <h1>LIÊN HỆ VỚI CHÚNG TÔI</h1>
                <p><a href="./index.html">TRANG CHỦ</a>/LIÊN HỆ</p>
            </div>
        </section>
        <section id="section-contact-detail">
            <div class="bs-container">
                <div class="bs-row">
                    <div class="bs-col md-50">
                        <div class="contact-detail_left">
                            <h4 class="contact-title">THÔNG TIN LIÊN HỆ</h4>
                            <p>Vui lòng gọi cho chúng tôi ngay bây giờ hoặc điền đầy đủ form thông tin bên cạnh. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất!</p>
                            <div class="contact-address">
                                <h6>TRỤ SỞ CHÍNH TẠI HÀ NỘI</h6>
                                <div>
                                    <img src="../../dist/images/address-icon.svg" alt="" />
                                     <p>
                                        Tầng 12, Tòa văn phòng 1, Tổ hợp Sunsquare, Số 21 Lê Đức Thọ, Phường Mỹ Đình 2, Quận Nam Từ Liêm, Hà Nội
                                    </p>
                                </div>
                               <div>
                                    <img src="../../dist/images/phone-icon.svg" alt="" />
                                    <p>19002863</p>
                               </div>
                                
                            </div>
                            <div class="contact-address">
                                <h6>CHI NHÁNH TP HỒ CHÍ MINH</h6>
                                <div>
                                    <img class="address-icon" src="../../dist/images/address-icon.svg" alt="" />
                                     <p>
                                        Số 11B, Hồng Hà, Phường 2, Quận Tân Bình, TP Hồ Chí Minh
                                    </p>
                                </div>
                               <div>
                                    <img class="address-icon" src="../../dist/images/phone-icon.svg" alt="" />
                                    <p>19002863</p>
                               </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="bs-col md-50">
                        <div class="contact-detail_right">
                            <h4 class="contact-title">THÔNG TIN ĐỂ CHÚNG TÔI CÓ THỂ LIÊN HỆ VỚI BẠN</h4>
                            <div class="input-group">
                                <input type="text" placeholder="Họ và tên" />
                                <input type="text" placeholder="Số điện thoại" />
                            </div>
                            <div class="input-group">
                                <input type="text" placeholder="Email" />
                                <input type="text" placeholder="Tổ chức" />
                            </div>
                            <input type="text" placeholder="Liên hệ về việc" />
                            <textarea row="3" placeholder="Nội dung ..."></textarea>
                            <button>GỬI TIN</button>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
{% endblock %}
{% block script %}
    
{% endblock %}