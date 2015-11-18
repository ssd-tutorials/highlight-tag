var highlightObject = {
	tags : ['p', 'li', 'span', 'em', 'a', 'strong', 'dd', 'dt', 'th', 'td'],
	excludeId : ['count'],
	option : function(obj) {
		"use strict";
		var thisOption = '<option value="';
		thisOption += obj;
		thisOption += '">';
		thisOption += obj;
		thisOption += '</option>';
		return thisOption;
	},
	menu : function(obj) {
		"use strict";
		if (highlightObject.tags.length > 0) {
			if (highlightObject.tags.length > 1) {
				highlightObject.tags.sort();
				jQuery.each(highlightObject.tags, function(k, v) {
					obj.append(highlightObject.option(v));
				});
			} else {
				obj.append(highlightObject.option(highlightObject.tags));
			}
		}
	},
	run : function(obj) {
		"use strict";
		obj.live('change', function() {
			var thisTags = highlightObject.tags.join(', ');
			$(thisTags).removeClass('fade highlight');
			var thisTag = $(this).val().toLowerCase();
			if (thisTag && typeof thisTag !== 'undefined') {
				$(thisTags).addClass('fade');
				$(thisTag).addClass('highlight');
				$('#count').text($(thisTag).length);
			} else {
				$('#count').text('0');
			}
		});
	}
};
$(function() {
	"use strict";
	highlightObject.menu($('#tag'));
	highlightObject.run($('#tag'));
});




