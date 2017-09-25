var BootstrapTouchspin = function () {
    var t = function () {
        $("#m_touchspin_1, #m_touchspin_2_1").TouchSpin({
            buttondown_class: "btn btn-secondary",
            buttonup_class: "btn btn-secondary",
            min: 0,
            max: 100,
            step: .1,
            decimals: 2,
            boostat: 5,
            maxboostedstep: 10
        }), $("#m_touchspin_2, #m_touchspin_2_2").TouchSpin({
            buttondown_class: "btn btn-secondary",
            buttonup_class: "btn btn-secondary",
            min: -1e9,
            max: 1e9,
            stepinterval: 50,
            maxboostedstep: 1e7,
            prefix: "$"
        }), $("#m_touchspin_3, #m_touchspin_2_3").TouchSpin({
            buttondown_class: "btn btn-secondary",
            buttonup_class: "btn btn-secondary",
            min: -1e9,
            max: 1e9,
            stepinterval: 50,
            maxboostedstep: 1e7,
            postfix: "$"
        }), $("#m_touchspin_4, #m_touchspin_2_4").TouchSpin({
            buttondown_class: "btn btn-secondary",
            buttonup_class: "btn btn-secondary",
            verticalbuttons: !0,
            verticalupclass: "la la-plus",
            verticaldownclass: "la la-minus"
        }), $("#m_touchspin_5, #m_touchspin_2_5").TouchSpin({
            max: 7,
            buttondown_class: "btn btn-secondary",
            buttonup_class: "btn btn-secondary",
            verticalbuttons: !0,
            verticalupclass: "la la-angle-up",
            verticaldownclass: "la la-angle-down"
        }),
            $("#m_touchspin_6").TouchSpin({
                max: 7,
                buttondown_class: "btn btn-secondary",
                buttonup_class: "btn btn-secondary",
                verticalbuttons: !0,
                verticalupclass: "la la-angle-up",
                verticaldownclass: "la la-angle-down"
            })
    }, n = function () {
        $("#m_touchspin_1_validate").TouchSpin({
            buttondown_class: "btn btn-secondary",
            buttonup_class: "btn btn-secondary",
            min: -1e9,
            max: 1e9,
            stepinterval: 50,
            maxboostedstep: 1e7,
            prefix: "$"
        }), $("#m_touchspin_2_validate").TouchSpin({
            buttondown_class: "btn btn-secondary",
            buttonup_class: "btn btn-secondary",
            min: 0,
            max: 100,
            step: .1,
            decimals: 2,
            boostat: 5,
            maxboostedstep: 10
        }), $("#m_touchspin_3_validate").TouchSpin({
            buttondown_class: "btn btn-secondary",
            buttonup_class: "btn btn-secondary",
            verticalbuttons: !0,
            verticalupclass: "la la-plus",
            verticaldownclass: "la la-minus"
        })
    };
    return {
        init: function () {
            t(), n()
        }
    }
}();
jQuery(document).ready(function () {
    BootstrapTouchspin.init()
});