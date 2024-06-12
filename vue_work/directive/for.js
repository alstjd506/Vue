const template= /*html*/`
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>순번</th>
                <th>제품명</th>
                <th>가격</th>
            </tr>
        </thead>
        <tbody>
            <tr :key="i" v-for="(product, i) in prod">
                <td>{{i}}</td>
                <td>{{product.prodNm}}</td>
                <td>{{product.price}}</td>
            </tr>
        </tbody>

`
export default {
    template,
    data(){return {
            prod : [{prodNm :'키보드', price :4000},
                    {prodNm :'마우스', price :2000},
                    {prodNm :'모니터', price :50000}
            ]



            }


    },
    methods : {}
}

