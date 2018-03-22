const config = {
    color: '#225159'
};

class Script {
    /**
     * @params {object} request
     */
    prepare_outgoing_request({ request }) {
        const trigger = request.data.trigger_word.toLowerCase() + ' ';
        const phrase = request.data.text.toLowerCase().replace(trigger, '').replace(/ /g, '+');
        let u = '';
        if(trigger.indexOf('card') !== -1) {
            u = request.url + 'cards?name=' + phrase;
        }
        return {
            url: u,
            headers: request.headers,
            method: 'GET'
        };
    }

    process_outgoing_response({ request, response }) {
        let img = '';
		const errormsg = 'Sorry, but I couldn\'t find a card by that name :sweat:';
        if(response.content.cards.length !== 0) {
            if(Array.isArray(response.content.cards)) {				
				for (var i = 0, len = response.content.cards.length; i < len; i++) {
					if(response.content.cards[i].hasOwnProperty('imageUrl')){
						img = response.content.cards[i].imageUrl;
						break;
					}
				}
				if(img === ''){
					return {
						content: {
							text: errormsg
						}
					};
				}
            } else {
				if(response.content.cards.hasOwnProperty('imageUrl')){
					img = response.content.cards.imageUrl;
				}
				else {
					return {
						content: {
							text: errormsg
						}
					};
				}
            }
            return {
                content: {
                    attachments: [
                        {
                            title: "Gatherer",
                            image_url: img,
                            color: ((config['color'] != '') ? '#' + config['color'].replace('#', '') : '#225159')
                        }
                    ]
                }
            };
        } else {
            return {
                content: {
                    text: errormsg
                }
            };
        }
    }
}
