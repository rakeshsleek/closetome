//require('./bootstrap');
// require('../../modules/BusinessPortal/Resources/assets/js/app');
//
//
// console.log(1);


!function ($) {
    "use strict";
    // businessType

    var $frm = $("#frm"),
        $registrationFrm = $('#registrationFrm'),
        validate = ($.fn.validate !== undefined);
    // Update store form validation
    if ($frm.length > 0 && validate) {
        $frm.validate({
            rules:{
                business_name: {
                    required: true,
                },
                business_description: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true,
                    integer: true
                },
                password: {
                    alphanumeric: true,
                    nowhitespace: true
                },
                confirmed: {
                    alphanumeric: true,
                    nowhitespace: true,
                    equalTo: "#input-password"
                },
                business_type: {
                    required: true,
                },
                category: {
                    required: true,
                },
                city: {
                    required: true,
                },
                country: {
                    required: true,
                },
                street: {
                    required: true,
                    nowhitespace: true,
                },
                postal_code: {
                    required: true,
                    nowhitespace: true,
                    integer: true
                },

            },
            messages: {
                business_name: {
                    required: "Campo obligatorio",
                },
                business_description: {
                    required: "Campo obligatorio",
                },
                email: {
                    required: "Campo obligatorio",
                    email: "Ingresa un correo electrónico valido"
                },
                mobile: {
                    required: "Campo obligatorio",
                    nowhitespace: "Ingresa un Código Postal Valid",
                    integer: "Ingresa un número de teléfono valido"
                },
                country: {
                    required: "Campo obligatorio",
                },
                city: {
                    required: "Campo obligatorio",
                },
                street: {
                    required: "Campo obligatorio",
                    nowhitespace: "Ingresa un Código Postal Valid",
                },
                street_number: {
                    required: "Campo obligatorio",
                },
                postal_code: {
                    required: "Campo obligatorio",
                    nowhitespace: "Ingresa un Código Postal Valid",
                    integer: "Ingresa un número de teléfono valido"
                },
                business_type: {
                    required: "Campo obligatorio",
                },
                category: {
                    required: "Campo obligatorio",
                },
                password: {
                    required: "Campo obligatorio",
                    nowhitespace: "Ingresa un Código Postal Valid",
                },
                confirmed: {
                    required: "Campo obligatorio",
                    nowhitespace: "Ingresa un Código Postal Valid",
                    equalTo: "Las contraseñas no coinciden"
                }

            }
        });
    }
    // Business User form validation
    if ($registrationFrm.length > 0 && validate) {
        $registrationFrm.validate({
            rules:{
                firstname: {
                    required: true,
                },
                lastname: {
                    required: true,
                },
                businessname: {
                    required: true,
                },
                business_description: {
                    required: true,
                },
                confirmed: {
                    required: true,
                },
                acceptcheckbox: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true
                },
                mobile: {
                    required: true,
                    integer: true
                },
                password: {
                    alphanumeric: true,
                    nowhitespace: true
                },
                cnfmpassword: {
                    alphanumeric: true,
                    nowhitespace: true,
                    equalTo: "#input-password"
                },
                business_type: {
                    required: true,
                },
                category: {
                    required: true,
                },
                city: {
                    required: true,
                },
                country: {
                    required: true,
                },
                street: {
                    required: true,
                },
                street_number: {
                    required: true,
                },
                postal_code: {
                    required: true,
                    nowhitespace: true,
                    integer: true
                },


            },
            messages: {
                firstname: {
                    required: "Campo obligatorio",
                },
                lastname: {
                    required: "Campo obligatorio",
                },
                businessname: {
                    required: "Campo obligatorio",
                },
                email: {
                    required: "Campo obligatorio",
                    email: "Ingresa un correo electrónico valido"
                },
                mobile: {
                    required: "Campo obligatorio",
                    nowhitespace: "Ingresa un Código Postal Valid",
                    integer: "Ingresa un número de teléfono valido"
                },
                country: {
                    required: "Campo obligatorio",
                },
                city: {
                    required: "Campo obligatorio",
                },
                street: {
                    required: "Campo obligatorio",
                },
                street_number: {
                    required: "Campo obligatorio",
                },
                postal_code: {
                    required: "Campo obligatorio",
                    nowhitespace: "Ingresa un Código Postal Valid",
                    integer: "Ingresa un número de teléfono valido"
                },
                business_type: {
                    required: "Campo obligatorio",
                },
                category: {
                    required: "Campo obligatorio",
                },
                password: {
                    required: "Campo obligatorio",
                    nowhitespace: "Ingresa un Código Postal Valid",
                },
                cnfmpassword: {
                    required: "Campo obligatorio",
                    nowhitespace: "Ingresa un Código Postal Valid",
                    equalTo: "Las contraseñas no coinciden"
                },
                confirmed: {
                    required: "Campo obligatorio",
                },
                acceptcheckbox: {
                    required: "Campo obligatorio",
                },

            }
        });
    }
    $('select[name="business_type').on('change', function() {
        var businessType = $('select[name="business_type"]').find(":selected").val();
        console.log(businessType);
        $.ajax({
            url: myLabel.parentCategory,
            dataType: 'json',
            method: 'POST',
            data: {
                businessType: businessType,
                _token: myLabel.token,
            },
            beforeSend: function() {
                $('select[name="business_type"]').after(' <i class="fa fa-circle-o-notch fa-spin"></i>');
            },
            complete: function() {
                $('.fa-spin').remove();
            },
            success: function(json) {
                console.log(json);
                // if (json['postcode_required'] == '1') {
                //     $('input[name=\'postcode\']').parent().parent().addClass('required');
                // } else {
                //     $('input[name=\'postcode\']').parent().parent().removeClass('required');
                // }
                var html = '';
                html = '<option value="">'+myLabel.selectOption+'</option>';

                if (json['businessTypeParentCategory'] && json['businessTypeParentCategory'] != '') {
                    for (var i = 0; i < json['businessTypeParentCategory'].length; i++) {
                        html += '<option value="' + json['businessTypeParentCategory'][i]['name'] + '"';
                        //console.log(json['states'][i]['id']);
                        if (json['businessTypeParentCategory'][i]['name'] == myLabel.businessTypeParentCategory) {

                            html += ' selected="selected"';
                        }

                        html += '>' + json['businessTypeParentCategory'][i]['name'] + '</option>';
                    }
                } else {
                    html += '<option value="0" selected="selected">Empty</option>';
                }

                $('select[name="category"]').html(html);
            },
            error: function(xhr, ajaxOptions, thrownError) {
                //alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    });

    $('select[name="business_type"]').trigger('change');

    // businessTypeParentCategory
    $('select[name="category').on('change', function() {
        var businessTypeParentCategory = $('select[name="category"]').find(":selected").val();
        $.ajax({
            url: myLabel.childCategory,
            dataType: 'json',
            method: 'POST',
            data: {
                businessTypeParentCategory: businessTypeParentCategory,
                _token: myLabel.token,
            },
            beforeSend: function() {
                $('select[name="category"]').after(' <i class="fa fa-circle-o-notch fa-spin"></i>');
            },
            complete: function() {
                $('.fa-spin').remove();
            },
            success: function(json) {
                console.log(json);
                var html = '';
                html = '<option value="">'+myLabel.selectOption+'</option>';

                if (json['businessTypeChildCategory'] && json['businessTypeChildCategory'] != '') {
                    for (var i = 0; i < json['businessTypeChildCategory'].length; i++) {
                        html += '<option value="' + json['businessTypeChildCategory'][i]['name'] + '"';
                        if (json['businessTypeChildCategory'][i]['name'] == myLabel.businessTypeChildCategory) {
                            html += ' selected="selected"';
                        }
                        html += '>' + json['businessTypeChildCategory'][i]['name'] + '</option>';
                    }
                } else {
                    html += '<option value="0" selected="selected">Empty</option>';
                }

                $('select[name="subcategory"]').html(html);
            },
            error: function(xhr, ajaxOptions, thrownError) {
                //alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    });


    setTimeout(function () {
        $('select[name="category"]').trigger('change');
    },300)

}(window.jQuery);

