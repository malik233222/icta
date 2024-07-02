import '../assets/style/home.scss'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Home() {
    return (

        <>

            <div className="top" >
                <div className="buttons" >
                    <a href=""> <FaPlus /> yeni şikayət yarat</a>
                    <a href=""> <FaPlus /> Ətraflı axtarış</a>
                    <a href=""> <FaPlus /> Təlimat</a>
                </div>
                <div className="search">
                    <label >
                        <CiSearch />
                    </label>
                    <input type="text" placeholder="         Axtar..." />
                </div>
            </div>

            <div className="center">
                <table >
                    <thead>
                        <tr className="row">
                            <th>
                                <span>Şikayət nömrəsi
                                </span>
                                <div>
                                    <TiArrowSortedUp />
                                    <TiArrowSortedDown />
                                </div>
                            </th>
                            <th>
                                <span>Fəaliyyət sahəsi</span>

                                <div>
                                    <TiArrowSortedUp />
                                    <TiArrowSortedDown />
                                </div>
                            </th>
                            <th>
                                <span>Şirkət</span>

                                <div>
                                    <TiArrowSortedUp />
                                    <TiArrowSortedDown />
                                </div>
                            </th>
                            <th>
                                <span>Mövzu</span>

                                <div>
                                    <TiArrowSortedUp />
                                    <TiArrowSortedDown />
                                </div>
                            </th>
                            <th>
                                <span>Abunəçi kodu</span>

                                <div>
                                    <TiArrowSortedUp />
                                    <TiArrowSortedDown />
                                </div>
                            </th>
                            <th>
                                <span>Status</span>

                                <div>
                                    <TiArrowSortedUp />
                                    <TiArrowSortedDown />
                                </div>
                            </th>
                            <th>
                                <span>Tarix</span>

                                <div>
                                    <TiArrowSortedUp />
                                    <TiArrowSortedDown />
                                </div>
                            </th>
                            <th>
                                <span>Əməliyyatlar</span>

                                <div>
                                    <TiArrowSortedUp />
                                    <TiArrowSortedDown />
                                </div>
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center ">
                            <td colspan="100%" rowspan="100%"> Heç bir şikayət əlavə edilməyib...   </td>

                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="bottom">
                <div className="dataTables_info">Göstərilən: 0-0, cəmi 0 (0 səhifə)</div>

                <div className="dataTable_paginate">
                    <a href="#"> <MdKeyboardArrowLeft /> </a>
                    <span></span>
                    <a href="#"> <MdKeyboardArrowRight /> </a>
                </div>
            </div>

        </>


    )
}
