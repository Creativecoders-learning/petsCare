
const DataTable = ({ columns, data, actions }) => {
      return (
            <div className="custom-scrollbar h-[80vh] overflow-y-auto shadow-myCustomShadow bg-white rounded">
                  <table className="min-w-full">
                        <thead>
                              <tr className="bg-primary text-white text-left">
                                    {columns.map((column) => (
                                          <th key={column.accessor} className="p-4 font-semibold">
                                                {column.header}
                                          </th>
                                    ))}
                                    {actions && actions.length > 0 && (
                                          <th className="p-4 font-semibold text-center">Actions</th>
                                    )}
                              </tr>
                        </thead>
                        <tbody className="text-myGray">
                              {data.map((item, index) => (
                                    <tr key={item.id} className={`${index % 2 === 0 ? "bg-primaryLight bg-opacity-10" : "bg-white"}`}>
                                          {columns.map((column) => (
                                                <td key={column.accessor} className="p-4">
                                                      {column.render ? column.render(item[column.accessor], item) : item[column.accessor]}
                                                </td>
                                          ))}
                                          {actions && (
                                                <td className="p-4 flex items-center justify-center space-x-3">
                                                      {actions.map((action) => (
                                                            <button
                                                                  key={action.label}
                                                                  onClick={() => action.onClick(item.id)}
                                                                  className={`p-2 text-white rounded-full hover:bg-opacity-80 transition duration-150 ${action.className}`}
                                                            >
                                                                  {action.icon}
                                                            </button>
                                                      ))}
                                                </td>
                                          )}
                                    </tr>
                              ))}
                        </tbody>
                  </table>
            </div>
      );
};

export default DataTable;
