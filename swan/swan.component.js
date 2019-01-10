window.bbRegions = {
    journey: [{
        position: {
            target: 'content',
            order: 'before'
        },
        render({
            data,
            previousData
        }) {
            if (data.page === '') {
                return Promise.resolve('');
            }

            const swans = data.company.extra.how_many_swans;
            let template = `<img width="270px" src="https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/375ee2b4-c274-e411-95bd-0050568e420d/630x355.jpg">`.repeat(swans);

            return Promise.resolve(template);
        }
    }]
}
