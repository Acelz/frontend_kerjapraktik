import DefaultLayout from "../../../layout/DefaultLayout";

const VillagePage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-wrap -mx-3 mb-5">
        <div className="w-full max-w-full px-3 mb-6  mx-auto">
          <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
            <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
              <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                  Data Kendaraan
                </h3>
              </div>
              <div className="flex-auto block py-8 pt-6 px-9">
                <div className="overflow-x-auto">
                  <table className="w-full my-0 align-middle text-dark border-neutral-200">
                    <thead className="align-bottom">
                      <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                        <th className="pb-3 text-center ">No</th>
                        <th className="pb-3 text-center">Kelurahan/Desa</th>
                        <th className="pb-3 text-center">Kode</th>
                        <th className="pb-3 text-center">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-dashed last:border-b-0">
                        <td className="p-3 text-center">1</td>
                        <td className="p-3 text-center">
                          Malalayang Satu Timur
                        </td>
                        <td className="p-3 text-center">11</td>
                        <td className="p-3 flex justify-center space-x-4 items-center">
                          <p className="cursor-pointer w-max  hover:border-b-2 hover:border-gray-300">
                            Ubah
                          </p>
                          <p className="cursor-pointer w-max  hover:border-b-2 hover:border-gray-300">
                            Hapus
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default VillagePage;
