export const dataVoucher = [
  {
    id: '0076a2ac-5192-4a46-b47e-625170c7cf4e',
    title: 'Giảm 15K',
    description: 'Giảm 15k cho tất cả đơn hàng',
    type: 'DISCOUNT_PRICE',
    minOrder: null,
    minQuantity: null,
    maxDiscount: 15000,
    discount: 15000,
    imgUrl:
      'https://minio.thecoffeehouse.com/image/admin/storage/1159_m1t1-v1.jpg',
  },
  {
    id: '06974552-1df2-4f2e-8d4c-44a69a911f0f',
    title: 'Ưu đãi 30%',
    description: 'Ưu đãi 30% (tối đa 35k) đơn từ 2 món bất kỳ',
    type: 'DISCOUNT_PERCENT',
    minOrder: null,
    minQuantity: 2,
    maxDiscount: 35000,
    discount: 30,
    imgUrl:
      'https://minio.thecoffeehouse.com/image/admin/Coupondelivery30_684527.jpg',
  },
  {
    id: '09c7049e-a3ad-4e90-87f1-824f0c459cc9',
    title: 'Freeship',
    description: 'Miễn phí giao hàng',
    type: 'FREESHIP',
    minOrder: null,
    minQuantity: null,
    maxDiscount: null,
    discount: null,
    imgUrl:
      'https://minio.thecoffeehouse.com/image/admin/storage/1159_m1t1-v1.jpg',
  },
  {
    id: '2f23f692-2dc8-4677-9262-0a4af866acd5',
    title: 'Giảm 30%',
    description:
      'Giảm 30% cho đơn hàng từ có tối thiểu 5 sản phẩm (tối đa 40K)',
    type: 'DISCOUNT_PERCENT',
    minOrder: null,
    minQuantity: 5,
    maxDiscount: 40000,
    discount: 30,
    imgUrl:
      'https://minio.thecoffeehouse.com/image/admin/Coupondelivery30_684527.jpg',
  },
  {
    id: '4d27a10a-c1d3-4bea-922c-4cfc89df3ab6',
    title: 'Giảm 50K đơn hàng',
    description: 'Giảm 50K cho đơn hàng từ 200K',
    type: 'DISCOUNT_PRICE',
    minOrder: 200000,
    minQuantity: null,
    maxDiscount: null,
    discount: 50000,
    imgUrl:
      'https://minio.thecoffeehouse.com/image/admin/Coupondelivery30_684527.jpg',
  },
  {
    id: '92a96a90-7a37-4bac-b360-139c9c6ae286',
    title: 'Giảm giá 20% (tối đa 35K)',
    description: 'Giảm giá 20% cho đơn tối thiểu 100K(tối đa 35K)',
    type: 'DISCOUNT_PERCENT',
    minOrder: 100000,
    minQuantity: null,
    maxDiscount: 35000,
    discount: 20,
    imgUrl:
      'https://minio.thecoffeehouse.com/image/admin/storage/696_Coupon_20Pickup_2020_.jpg',
  },
  {
    id: 'a544ca21-7b13-44aa-8b2d-851979fc671f',
    title: 'Mua 2 tặng 1',
    description: 'Mua 2 món trở lên tặng 1 món giá trị thấp nhất',
    type: 'BUY2_GIVE1',
    minOrder: null,
    minQuantity: 2,
    maxDiscount: null,
    discount: null,
    imgUrl:
      'https://minio.thecoffeehouse.com/image/admin/Coupondelivery30_684527.jpg',
  },
];
