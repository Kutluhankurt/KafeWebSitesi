import Title from "../ui/Title";

const Order = () => {
  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title addClass="text-[40px]">Siparişler</Title>
      <div className="overflow-x-auto w-full mt-5">
        <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                ÜRÜN ID
              </th>
              <th scope="col" className="py-3 px-6">
                MÜŞTERİ
              </th>
              <th scope="col" className="py-3 px-6">
                TOPLAM
              </th>
              <th scope="col" className="py-3 px-6">
                ÖDEME TÜRÜ
              </th>
              <th scope="col" className="py-3 px-6">
                DURUM
              </th>
              <th scope="col" className="py-3 px-6">
                -
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary ">
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white gap-x-1 ">
                63107...
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                KUTLUHAN KURT
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                12₺
              </td>

              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Nakit
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                hazırlanıyor
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <button className="btn-primary !bg-success">Sonraki Aşama</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;