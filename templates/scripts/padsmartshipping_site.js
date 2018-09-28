$(window).on('load', startPadSmartShippingSite);

/**
 * Called once the page is loaded
 */
function startPadSmartShippingSite() {
  padSmartShippingSiteSetPermanentFieldsValues();

  document.querySelectorAll('#padsmartshipping_site_country, #padsmartshipping_site_b2b').forEach(function(field) {
    $(field).on('change', padSmartShippingSiteSetPermanentChangeValue);
  });
}

function padSmartShippingSiteSetPermanentFieldsValues() {
  var padsmartshipping_site_country = document.getElementById('padsmartshipping_site_country');
  var padsmartshipping_site_b2b = document.getElementById('padsmartshipping_site_b2b');

  var country = $.cookie('padsmartshipping_site_country');
  var b2b = $.cookie('padsmartshipping_site_b2b');

  if(country != '') {
    padsmartshipping_site_country.value = country;
  }

  if(b2b != '') {
    padsmartshipping_site_b2b.checked = true;
  }
}

function padSmartShippingSiteSetPermanentChangeValue() {
  if(this.type == 'checkbox') {
    $.cookie(this.name, this.checked ? this.value : '');

  } else {
    $.cookie(this.name, this.value);
  }

  location.reload();
}
