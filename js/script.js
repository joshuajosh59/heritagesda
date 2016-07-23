/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){jQuery.browser.mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);


/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(f,h,$){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){var l=this;l.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder');return l};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;if(m!=h.activeElement){e.call(m)}}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder');l==h.activeElement&&l.select()}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));

$(function(){

	// Add form placeholder functionality to browsers that don't support it.
	$('input, textarea').placeholder();

	// Toggle Language Dropdown
	$('#nav-lang').on('click', function(e){
		e.preventDefault();
		$('#language-picker').toggle();
	})

	// Handle resizing drawing backgrounds on outer edge elements
	constantBackground();


	if(!jQuery.browser.mobile || ($(window).width() > 481)) {
		// Info Box Hovers
		$('.info-link a').hover(function(){
			$(this).attr('style', 'background: url("'+$(this).data('hover')+'") no-repeat 50% 50%;');
		}, function() {
			$(this).attr('style', '');
		});
	}

	// iPhone Navigation
	$('#mobile-menu').on('click touch', function(e){
		e.preventDefault();
		$('nav, #utility-nav').toggle();
	});

	// Toggle the comments box
	$('#comment-toggle').on('click', function(e){
		e.preventDefault();
		$('#comments').toggle();
	});

	// Read More Toggle
	$('.read-more').each(function(){
	   $(this).append($('<div class="read-more-grad"><a href="#" class="rm-toggle">Read More</a></div>'));
	});
	$('.rm-toggle').on('click', function(e){
	    e.preventDefault();
	    $(this).closest('.read-more').toggleClass('open');
	    $('.read-more-grad').remove();
	});

});

// Right and Left Callout Extend background
function constantBackground() {
	// Don't run this on small screens
	if(!jQuery.browser.mobile || ($(window).width() > 481)) {
		if($('#right-callout').length) {
			var right = $('#right-callout');
			var right_o = right.offset().left;
			var v = $(window).width();
			$('#right-callout-bg').css('width', (v-right_o)+'px');
		}

		if($('#home-section-bottom').length) {
			var left = $('#home-section-bottom');
			var left_o = left.offset().left;
			$('#home-section-bottom-bg').css('left', '-'+left_o+'px');
		}

		if($('.content-left').length) {
			if($(window).width() <= 481) {
				$('.content-left').css({'min-height': '1px', 'height': 'auto'});
			} else {
				if($('.content-right').height() >= $('.content-left').height()) {
					$('.content-left').css('min-height', $('#content .container').height() + 'px');
				} else {
					$('.content-left').css('min-height', $('.content-right').height() + 70 + 'px');
				}
			}
		}
	}
}

$(window).resize(function() {
	constantBackground();
	if($(window).width() > 481) {
		$('nav, #utility-nav').css('display', 'block');
	} else {
		$('nav, #utility-nav').css('display', 'none');
	}
});

window.addEventListener("orientationchange", function() {
	constantBackground();
});


$(document).ready(function(){ 
	
	// Add the value of "Search..." to the input field and a class of .empty
	$("#search").val("Search...").addClass("empty");
	
	// When you click on #search
	$("#search").focus(function(){
		
		// If the value is equal to "Search..."
		if($(this).val() == "Search...") {
			// remove all the text and the class of .empty
			$(this).val("").removeClass("empty");;
		}
		
	});
	
	// When the focus on #search is lost
	$("#search").blur(function(){
		
		// If the input field is empty
		if($(this).val() == "") {
			// Add the text "Search..." and a class of .empty
			$(this).val("Search...").addClass("empty");	
		}
		
	});

});