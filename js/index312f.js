
$(document).ready(function () {
    $(".dangkyngay").click(function () {
        $('html, body').animate({ scrollTop: $('#div_DangKyNgay').offset().top }, 'slow');
        $('#txtfullname').focus();
    });

    $('#txt-error').hide();
    $('#txt-error2').hide();
    $('.custom-select').select2();
});

$(document).on('click', '#btn_DangKy', function () {
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if ($('#txtfullname').val().trim() == "") {
        $('#txt-error').html("Vui lòng nhập họ và tên");
        $('#txt-error').show();
        return false;
        $('#txtfullname').focus();
    }
    else if ($('#txtPhone').val().trim() == "") {
        $('#txt-error').html("Vui lòng nhập số điện thoại");
        $('#txt-error').show();
        return false;
        $('#txtPhone').focus();
    }
    else if (vnf_regex.test($('#txtPhone').val().trim()) == false) {
        $('#txt-error').html("Số điện thoại sai định dạng");
        $('#txt-error').show();
        return false;
        $('#txtPhone').focus();
    }
    else if ($('#cboCity').val() == 0) {
        $('#txt-error').html("Vui lòng chọn khu vực sống hiện tại");
        $('#txt-error').show();
        return false;
        $('#cboCity').focus();
    }
    else if ($('#cboDistrict').val() == 0) {
        $('#txt-error').html("Vui lòng chọn quận huyện");
        $('#txt-error').show();
        return false;
        $('#cboDistrict').focus();
    }
    else {
        $('#hdd_IsApply').val($('#cboDistrict option:selected').attr('isApply'));
        $('#hdd_ProvinceName').val($('#cboCity option:selected').text());
        $('#hdd_DistrictName').val($('#cboDistrict option:selected').text());
        $('#hdd_UsertAgent').val(window.navigator.userAgent);
        $('#_btn_dangky_loading').addClass("fa fa-spinner fa-spin");
        document.getElementById("btn_DangKy").disabled = true;
        $('#btn_DangKy').attr('style', 'cursor: not-allowed');
        $('#form-create-customer').submit();
    }
});

$("#_title").click(function () {
    window.location.href;
});

$(document).on('click', '#btn_DangKy2', function () {
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if ($('#txtfullname2').val().trim() == "") {
        $('#txt-error2').html("Vui lòng nhập họ và tên");
        $('#txt-error2').show();
        return false;
        $('#txtfullname2').focus();
    }
    if ($('#txtPhone2').val().trim() == "") {
        $('#txt-error2').html("Vui lòng nhập số điện thoại");
        $('#txt-error2').show();
        return false;
        $('#txtPhone2').focus();
    }
    else if (vnf_regex.test($('#txtPhone2').val().trim()) == false) {
        $('#txt-error2').html("Số điện thoại sai định dạng");
        $('#txt-error2').show();
        return false;
        $('#txtPhone2').focus();
    }
    if ($('#cboCity2').val() == 0) {
        $('#txt-error2').html("Vui lòng chọn khu vực sống hiện tại");
        $('#txt-error2').show();
        return false;
        $('#cboCity2').focus();
    }
    if ($('#cboDistrict2').val() == 0) {
        $('#txt-error2').html("Vui lòng chọn quận huyện");
        $('#txt-error2').show();
        return false;
        $('#cboDistrict2').focus();
    }
    else {
        $('#hdd_IsApply2').val($('#cboDistrict2 option:selected').attr('isApply'));
        $('#hdd_ProvinceName2').val($('#cboCity2 option:selected').text());
        $('#hdd_DistrictName2').val($('#cboDistrict2 option:selected').text());
        $('#hdd_UsertAgent2').val(window.navigator.userAgent);
        $('#_btn_searchLoan_loading2').addClass("fa fa-spinner fa-spin");
        document.getElementById("btn_DangKy2").disabled = true;
        $('#btn_DangKy2').attr('style', 'cursor: not-allowed');
        $('#form-create-customer2').submit();
    }
});

function GetDistrict(cityId, element) {
    $(element).empty();
    if (cityId > 0) {
        $('.error-cboCity').attr('hidden', true);
        $.ajax({
            type: "GET",
            url: '/Home/GetAllDistrict',
            data: { provinceId: cityId },
            success: function (msg) {
                $(element).append('<option isApply = "0" value="' + 0 + '">' + 'Quận/Huyện' + '</option>');
                for (var i = 0; i < msg.lstData.length; i++) {
                    $(element).append('<option isApply = "' + msg.lstData[i].isApply + '" value="' + msg.lstData[i].districtId + '">' + msg.lstData[i].name + '</option>');
                }
            }
        });
    }
    else {
        $(element).empty();
        $(element).append('<option isApply = "0" value="' + 0 + '">' + 'Quận/Huyện' + '</option>');
    }
}
