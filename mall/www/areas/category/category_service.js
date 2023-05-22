/**
 * 商品分类服务
 */
angular.module('category.service', [])
  .factory('categoryFty', function ($q) {
    return {
      getCategoryData: function() {
        var categoryData = [
          {
            name: "菜单1",
            typeNumber: '100'
          },
          {
            name: "品牌男装",
            typeNumber: '101'
          },
          {
            name: "母婴频道",
            typeNumber: '102'
          },
          {
            name: "内衣配饰",
            typeNumber: '103'
          },
          {
            name: "美妆护肤",
            typeNumber: '104'
          },
          {
            name: "家用电器",
            typeNumber: '105'
          },
          {
            name: "电脑办公",
            typeNumber: '106'
          },
          {
            name: "手机数码",
            typeNumber: '107'
          },
          {
            name: "居家日用",
            typeNumber: '108'
          },
          {
            name: "家具建材",
            typeNumber: '109'
          },
          {
            name: "美食保健",
            typeNumber: '110'
          },
          {
            name: "运动户外",
            typeNumber: '111'
          }
        ];
        // 假设数据请求成功
        var deferred = $q.defer();
        deferred.resolve(categoryData);
        return deferred.promise;
      },
      getCategoryDetailData:function(typeNumber){
              var categoryDetailData=[];

        if(typeNumber==100){
          categoryDetailData=
          // [
          //   {
          //     name:"毛呢大衣",
          //     src:"img/category/nz1.jpg",
          //     typeNumber:'10001'
          //   },
          //   {
          //     name:"羽绒服",
          //     src:"img/category/nz2.jpg",
          //     typeNumber:'10002'
          //   },
          //   {
          //     name:"针织衫",
          //     src:"img/category/nz3.jpg",
          //     typeNumber:'10003'
          //   },
          //   {
          //     name:"连衣裙",
          //     src:"img/category/nz4.jpg",
          //     typeNumber:'10004'
          //   },
          //   {
          //     name:"棉服",
          //     src:"img/category/nz5.jpg",
          //     typeNumber:'10005'
          //   },
          //   {
          //     name:"长袖T恤",
          //     src:"img/category/nz6.jpg",
          //     typeNumber:'10006'
          //   },
          //   {
          //     name:"羊绒衫",
          //     src:"img/category/nz7.jpg",
          //     typeNumber:'10007'
          //   },
          //   {
          //     name:"衬衫",
          //     src:"img/category/nz8.jpg",
          //     typeNumber:'10008'
          //   },
          //   {
          //     name:"风衣",
          //     src:"img/category/nz9.jpg",
          //     typeNumber:'10009'
          //   },
          //   {
          //     name:"皮衣",
          //     src:"img/category/nz10.jpg",
          //     typeNumber:'10010'
          //   },
          //   {
          //     name:"休闲裤",
          //     src:"img/category/nz11.jpg",
          //     typeNumber:'10011'
          //   },
          //   {
          //     name:"牛仔裤",
          //     src:"img/category/nz12.jpg",
          //     typeNumber:'10012'
          //   }
          // ];
          [
            {
              name: '轻舞飘絮',
              price: '288',
              haoping: '100',
              buy: '733',
              productId: "4",
              src: 'img/goodsList/goods4.jpg'
            },
            {
              name: '时竟 ',
              price: '289',
              haoping: '100',
              buy: '773',
              productId: "5",
              src: 'img/goodsList/goods5.jpg'
            },
            {
              name: '伊芙丽201筒中长',
              price: '499',
              haoping: '100',
              buy: '6',
              productId: "6",
              src: 'img/goodsList/goods6.jpg'
            },
            {
              name: '辉华玫紫色 M',
              price: '229',
              haoping: '99',
              buy: '215',
              productId: "7",
              src: 'img/goodsList/goods7.jpg'
            },
            {
              name: 'Ochirly欧时860 大红120 S',
              price: '1323',
              haoping: '69',
              buy: '19',
              productId: "8",
              src: 'img/goodsList/goods8.jpg'
            },
            {
              name: '烟花烫2015杂点 M现货',
              price: '368',
              haoping: '69',
              buy: '28',
              productId: "9",
              src: 'img/goodsList/goods9.jpg'
            }
          ];
        }else{
          categoryDetailData =[
            {
              name:"夹克",
              src:"img/category/nanz1.jpg",
              typeNumber:'10013'
            },
            {
              name:"衬衫",
              src:"img/category/nanz2.jpg",
              typeNumber:'10014'
            },
            {
              name:"牛仔裤",
              src:"img/category/nanz3.jpg",
              typeNumber:'10015'
            },
            {
              name:"羽绒服",
              src:"img/category/nanz4.jpg",
              typeNumber:'10016'
            },

            {
              name:"T恤",
              src:"img/category/nanz5.jpg",
              typeNumber:'10017'
            },
            {
              name:"休闲裤",
              src:"img/category/nanz6.jpg",
              typeNumber:'10018'
            },
            {
              name:"卫衣",
              src:"img/category/nanz7.jpg",
              typeNumber:'10019'
            },
            {
              name:"针织衫",
              src:"img/category/nanz8.jpg",
              typeNumber:'10020'
            },
            {
              name:"棉服",
              src:"img/category/nanz9.jpg",
              typeNumber:'10021'
            }
          ];
        }
          // 假设数据请求成功
          var deferred = $q.defer();
          deferred.resolve(categoryDetailData);
          return deferred.promise;
        }
      }
  });
