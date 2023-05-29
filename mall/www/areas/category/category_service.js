/**
 * 商品分类服务
 */
angular.module('category.service', [])
  .factory('categoryFty', function ($q) {
    return {
      getCategoryData: function() {
        var categoryData = [
          {
            name: "首页",
            typeNumber: '100'
          },
          {
            name: "现熬咸粥",
            typeNumber: '101'
          },
          {
            name: "元气小吃",
            typeNumber: '102'
          },
          {
            name: "超级满减",
            typeNumber: '103'
          },
          {
            name: "TOP爆款",
            typeNumber: '104'
          },
          {
            name: "当季新品",
            typeNumber: '105'
          },
          {
            name: "礼包专区",
            typeNumber: '106'
          },
          {
            name: "环球坚果",
            typeNumber: '107'
          },
          {
            name: "国民面包",
            typeNumber: '108'
          },
          {
            name: "抖味肉食",
            typeNumber: '109'
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
              name: '健康代餐',
              price: '288',
              haoping: '100',
              buy: '733',
              productId: "4",
              src: 'img/goodsList/goods4.jpg'
            },
            {
              name: '深夜美食',
              price: '289',
              haoping: '100',
              buy: '773',
              productId: "5",
              src: 'img/goodsList/goods5.jpg'
            },
            {
              name: '深夜美食',
              price: '499',
              haoping: '100',
              buy: '6',
              productId: "6",
              src: 'img/goodsList/goods6.jpg'
            }
          ];
        }else{
          categoryDetailData =[
            {
              name: '人气潮礼',
              price: '229',
              haoping: '99',
              buy: '215',
              productId: "7",
              src: 'img/goodsList/goods7.jpg'
            },
            {
              name: '国民坚果',
              price: '1323',
              haoping: '69',
              buy: '19',
              productId: "8",
              src: 'img/goodsList/goods8.jpg'
            },
            {
              name: '热卖果干',
              price: '368',
              haoping: '69',
              buy: '28',
              productId: "9",
              src: 'img/goodsList/goods9.jpg'
            },
            // {
            //   name:"养生乌鱼粥",
            //   src:"img/category/z1.jpg",
            //   productId: "10",
            //   typeNumber:'10013'
            // },
            // {
            //   name:"皮蛋瘦肉粥",
            //   src:"img/category/z2.jpg",
            //   productId: "11",
            //   typeNumber:'10014'
            // },
            // {
            //   name:"香菇皮蛋瘦肉粥",
            //   src:"img/category/z3.jpg",
            //   productId: "12",
            //   typeNumber:'10015'
            // },
            // {
            //   name:"番茄牛肉粥",
            //   src:"img/category/z4.jpg",
            //   productId: "13",
            //   typeNumber:'10016'
            // },
            // {
            //   name:"番茄瘦肉粥",
            //   src:"img/category/z5.jpg",
            //   productId: "14",
            //   typeNumber:'10017'
            // },
            // {
            //   name:"玉米山药粥",
            //   src:"img/category/z6.jpg",
            //   productId: "15",
            //   typeNumber:'10018'
            // },
            // {
            //   name:"小酥肉蔬菜粥",
            //   src:"img/category/z7.jpg",
            //   productId: "16",
            //   typeNumber:'10019'
            // },
            // {
            //   name:"玉米排骨粥",
            //   src:"img/category/z8.jpg",
            //   productId: "17",
            //   typeNumber:'10020'
            // },
            // {
            //   name:"香菇排骨粥",
            //   src:"img/category/z9.jpg",
            //   productId: "18",
            //   typeNumber:'10021'
            // }
          ];
        }
          // 假设数据请求成功
          var deferred = $q.defer();
          deferred.resolve(categoryDetailData);
          return deferred.promise;
        }
      }
  });
