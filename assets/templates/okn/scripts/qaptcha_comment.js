jQuery.QapTcha = {
	build : function(options)
	{
        var defaults = {
			disabledSubmit : true,
			autoRevert : true
        };   
		
		if(this.length>0)
		return jQuery(this).each(function(i) {
			/** Vars **/
			var 
				opts = $.extend(defaults, options),      
				$this = $(this),
				form = $('form').has($this),
				Clr = jQuery('<div>',{'class':'clr'}),
				bgSlider = jQuery('<div>',{id:'bgSlider'}),
				Slider = jQuery('<div>',{id:'Slider'}),
				Icons = jQuery('<div>',{id:'Icons'}),
				inputQapTcha = jQuery('<input>',{name:'iQapTcha',value:'passed',type:'hidden'});
			
			/** Disabled submit button **/
			if(opts.disabledSubmit) form.find('input[type=\'submit\']').attr('disabled','disabled');
			
			/** Construct DOM **/
			bgSlider.appendTo($this);
			Icons.insertAfter(bgSlider);
			Clr.insertAfter(Icons);
			Slider.appendTo(bgSlider);
			$this.show();
			
			Slider.draggable({ 
				revert: function(){
					if(opts.autoRevert)
					{
						if(parseInt(Slider.css("left")) > 150) return false;
						else return true;
					}
				},
				containment: bgSlider,
				axis:'x',
				stop: function(event,ui){
					if(ui.position.left > 150)
					{
						Slider.draggable('disable').css('cursor','default');
					        $("#captcha").css('display' , 'block');
						inputQapTcha.appendTo($this);
						$("#QapTcha #Icons").css('background-position','-16px 0');	
					}
				}
			});
			
		});
	}
}; jQuery.fn.QapTcha = jQuery.QapTcha.build;
