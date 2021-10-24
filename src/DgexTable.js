import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import InputIcon from '@mui/icons-material/Input';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import AssignmentTurnedInSharpIcon from '@mui/icons-material/AssignmentTurnedInSharp';
import AttachmentTwoToneIcon from '@mui/icons-material/AttachmentTwoTone';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
const Styles = styled.div`
table {
  width: 100%;
  border-spacing: 0;
  tr {
    :last-child {
      td {
        border-bottom: 1px solid black;
      }
    }
  }
  th,
  td {
    margin: 0;
    padding: 1px;
    border-bottom: 1px solid black;
    border-right: 1px dotted black;
    width: 1%;
    font-size: 14px;
    &.collapse {
      width: 0.0000000001%;
    }
    :first-child {
      border-left: 1px solid black;
    }
    :last-child {
      border-right: 1px solid black;
    }
    input {
      padding: 0;
      margin: 0;
      border: 0;
      width: 100%;
      height: 90%;
      font-size: 12px;
    }
    .progress {
      font-size: 14px;
      height: 100%;
    }
  }
}
/* ファイル読み込みボタンのレイアウト */
label > input {
  display:none;
}
label {
  margin: 4px 0px 4px 0px;
  width: 100%;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
}
`
// Modal のスタイル
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
// A + B のステータスゲージを作る(およそ60でMAX)
function CreateProgress ( a, b ){
  return (
    <div class="progress">
      <div class="progress-bar bg-danger" role="progressbar" aria-valuenow={a} aria-valuemin="0" aria-valuemax="100" style={{width: parseInt(a)*1.6666667+'%'}}>
        {a}
      </div>
      <div class="progress-bar bg-success" role="progressbar" aria-valuenow={b} aria-valuemin="0" aria-valuemax="100" style={{width: parseInt(b)*1.6666667+'%'}}>
        {b}
      </div>
    </div>
  );
}
function CreateProgressHTML ( a, b ){
  if( parseInt(a) + parseInt(b) === 0 ) return "";
  return `
    <div class="progress">
      <div class="progress-bar bg-danger" role="progressbar" aria-valuenow=` + a + `aria-valuemin="0" aria-valuemax="100" style="width: ` + parseInt(a)*1.6666667 + `%;">
      ` + a + `
      </div>
      <div class="progress-bar bg-success" role="progressbar" aria-valuenow=`+ b +` aria-valuemin="0" aria-valuemax="100" style="width: ` + parseInt(b)*1.6666667 + `%;">
      ` + b + `
      </div>
    </div>
    `
  ;
}

// テーブルを再描画
const RefreshTable = ( table, _data ) => {
  for(let i in _data){
    if( table.rows[0].cells[0].firstChild.data === "配置")
    {
      document.body.contains(table.rows[ parseInt(i) + 1 ].cells[0].firstChild)
      ? table.rows[ parseInt(i) + 1 ].cells[0].firstChild.data = _data[i].pos
      : table.rows[ parseInt(i) + 1 ].cells[0].appendChild(document.createTextNode(_data[i].pos))
      document.body.contains(table.rows[ parseInt(i) + 1 ].cells[1].firstChild)
      ? table.rows[ parseInt(i) + 1 ].cells[1].firstChild.data = _data[i].race
      : table.rows[ parseInt(i) + 1 ].cells[1].appendChild(document.createTextNode(_data[i].race))
      document.body.contains(table.rows[ parseInt(i) + 1 ].cells[2].firstChild)
      ? table.rows[ parseInt(i) + 1 ].cells[2].firstChild.data = _data[i].cls
      : table.rows[ parseInt(i) + 1 ].cells[2].appendChild(document.createTextNode(_data[i].cls))
      document.body.contains(table.rows[ parseInt(i) + 1 ].cells[3].firstChild)
      ? table.rows[ parseInt(i) + 1 ].cells[3].firstChild.data = _data[i].name
      : table.rows[ parseInt(i) + 1 ].cells[3].appendChild(document.createTextNode(_data[i].name))
      document.body.contains(table.rows[ parseInt(i) + 1 ].cells[4].firstChild)
      ? table.rows[ parseInt(i) + 1 ].cells[4].firstChild.data = _data[i].lv
      : table.rows[ parseInt(i) + 1 ].cells[4].appendChild(document.createTextNode(_data[i].lv))
      document.body.contains(table.rows[ parseInt(i) + 1 ].cells[5].firstChild)
      ? table.rows[ parseInt(i) + 1 ].cells[5].firstChild.data = _data[i].hp
      : table.rows[ parseInt(i) + 1 ].cells[5].appendChild(document.createTextNode(_data[i].hp))
      document.body.contains(table.rows[ parseInt(i) + 1 ].cells[6].firstChild)
      ? table.rows[ parseInt(i) + 1 ].cells[6].firstChild.data = _data[i].str_sum
      : table.rows[ parseInt(i) + 1 ].cells[6].appendChild(document.createTextNode(_data[i].str_sum))
      document.body.contains(table.rows[ parseInt(i) + 1 ].cells[7].firstChild)
      ? table.rows[ parseInt(i) + 1 ].cells[7].innerHTML = CreateProgressHTML(_data[i].str_base, _data[i].str_plus + _data[i].str_r_a + _data[i].str_l_a)
      : table.rows[ parseInt(i) + 1 ].cells[7].innerHTML = CreateProgressHTML(_data[i].str_base, _data[i].str_plus + _data[i].str_r_a + _data[i].str_l_a)
      document.body.contains(table.rows[ parseInt(i) + 1 ].cells[8].firstChild)
      ? table.rows[ parseInt(i) + 1 ].cells[8].firstChild.data = _data[i].int_sum
      : table.rows[ parseInt(i) + 1 ].cells[8].appendChild(document.createTextNode(_data[i].int_sum))
      document.body.contains(table.rows[ parseInt(i) + 1 ].cells[9].firstChild)
      ? table.rows[ parseInt(i) + 1 ].cells[9].innerHTML = CreateProgressHTML(_data[i].int_base, _data[i].int_plus + _data[i].int_r_a + _data[i].int_l_a)
      : table.rows[ parseInt(i) + 1 ].cells[9].innerHTML = CreateProgressHTML(_data[i].int_base, _data[i].int_plus + _data[i].int_r_a + _data[i].int_l_a)
      document.body.contains(table.rows[ parseInt(i) + 1 ].cells[10].firstChild)
      ? table.rows[ parseInt(i) + 1 ].cells[10].firstChild.data = _data[i].mys_sum
      : table.rows[ parseInt(i) + 1 ].cells[10].appendChild(document.createTextNode(_data[i].mys_sum))
      document.body.contains(table.rows[ parseInt(i) + 1 ].cells[11].firstChild)
      ? table.rows[ parseInt(i) + 1 ].cells[11].innerHTML = CreateProgressHTML(_data[i].mys_base, _data[i].mys_plus + _data[i].mys_r_a + _data[i].mys_l_a)
      : table.rows[ parseInt(i) + 1 ].cells[11].innerHTML = CreateProgressHTML(_data[i].mys_base, _data[i].mys_plus + _data[i].mys_r_a + _data[i].mys_l_a)
      document.body.contains(table.rows[ parseInt(i) + 1 ].cells[12].firstChild)
      ? table.rows[ parseInt(i) + 1 ].cells[12].firstChild.data = _data[i].vit_sum
      : table.rows[ parseInt(i) + 1 ].cells[12].appendChild(document.createTextNode(_data[i].vit_sum))
      document.body.contains(table.rows[ parseInt(i) + 1 ].cells[13].firstChild)
      ? table.rows[ parseInt(i) + 1 ].cells[13].innerHTML = CreateProgressHTML(_data[i].vit_base, _data[i].vit_plus + _data[i].vit_r_a + _data[i].vit_l_a)
      : table.rows[ parseInt(i) + 1 ].cells[13].innerHTML = CreateProgressHTML(_data[i].vit_base, _data[i].vit_plus + _data[i].vit_r_a + _data[i].vit_l_a)
      document.body.contains(table.rows[ parseInt(i) + 1 ].cells[14].firstChild)
      ? table.rows[ parseInt(i) + 1 ].cells[14].firstChild.data = _data[i].agi_sum
      : table.rows[ parseInt(i) + 1 ].cells[14].appendChild(document.createTextNode(_data[i].agi_sum))
      document.body.contains(table.rows[ parseInt(i) + 1 ].cells[15].firstChild)
      ? table.rows[ parseInt(i) + 1 ].cells[15].innerHTML = CreateProgressHTML(_data[i].agi_base, _data[i].agi_plus + _data[i].agi_r_a + _data[i].agi_l_a)
      : table.rows[ parseInt(i) + 1 ].cells[15].innerHTML = CreateProgressHTML(_data[i].agi_base, _data[i].agi_plus + _data[i].agi_r_a + _data[i].agi_l_a)
      document.body.contains(table.rows[ parseInt(i) + 1 ].cells[16].firstChild)
      ? table.rows[ parseInt(i) + 1 ].cells[16].firstChild.data = _data[i].luc_sum
      : table.rows[ parseInt(i) + 1 ].cells[16].appendChild(document.createTextNode(_data[i].luc_sum))
      document.body.contains(table.rows[ parseInt(i) + 1 ].cells[17].firstChild)
      ? table.rows[ parseInt(i) + 1 ].cells[17].innerHTML = CreateProgressHTML(_data[i].luc_base, _data[i].luc_plus + _data[i].luc_r_a + _data[i].luc_l_a)
      : table.rows[ parseInt(i) + 1 ].cells[17].innerHTML = CreateProgressHTML(_data[i].luc_base, _data[i].luc_plus + _data[i].luc_r_a + _data[i].luc_l_a)
      document.body.contains(table.rows[ parseInt(i) + 1 ].cells[18].firstChild)
      ? table.rows[ parseInt(i) + 1 ].cells[18].firstChild.data = _data[i].e_r_a
      : table.rows[ parseInt(i) + 1 ].cells[18].appendChild(document.createTextNode(_data[i].e_r_a))
      document.body.contains(table.rows[ parseInt(i) + 1 ].cells[19].firstChild)
      ? table.rows[ parseInt(i) + 1 ].cells[19].firstChild.data = _data[i].atk_ra
      : table.rows[ parseInt(i) + 1 ].cells[19].appendChild(document.createTextNode(_data[i].atk_ra))
      document.body.contains(table.rows[ parseInt(i) + 1 ].cells[20].firstChild)
      ? table.rows[ parseInt(i) + 1 ].cells[20].firstChild.data = _data[i].e_l_a
      : table.rows[ parseInt(i) + 1 ].cells[20].appendChild(document.createTextNode(_data[i].e_l_a))
      document.body.contains(table.rows[ parseInt(i) + 1 ].cells[21].firstChild)
      ? table.rows[ parseInt(i) + 1 ].cells[21].firstChild.data = _data[i].atk_la
      : table.rows[ parseInt(i) + 1 ].cells[21].appendChild(document.createTextNode(_data[i].atk_la))
    }
    else
    {
      // つかれた
    }
  }
}

const default_data = [
  {
    id: 1, order:"01", pos:"前衛", race:"ヒューマン", cls:"ゲイザー", name: "オズ", lv:37, hp:937,
    str_base: 21, int_base: 9, mys_base: 9, vit_base: 20, agi_base: 9, luc_base:22,
    str_plus: 7, int_plus: 0, mys_plus: 0, vit_plus: 5, agi_plus: 0, luc_plus:0,
    str_bar: "", int_bar: "", mys_bar: "", vit_bar: "", agi_bar: "", luc_bar:"",
    str_sum: "", int_sum: "", mys_sum: "", vit_sum: "", agi_sum: "", luc_sum:"",
    str_r_a: 3, int_r_a: 0, mys_r_a: 0, vit_r_a: 0, agi_r_a: 0, luc_r_a:3, e_r_a:"聖剣デモンスレイン＋２２", atk_ra:509,
    str_l_a: 0, int_l_a: 0, mys_l_a: 0, vit_l_a: 0, agi_l_a: 0, luc_l_a:0, e_l_a:"守護天使の書", atk_la:0,
  },
  {
    id: 2, order:"12", pos:"前衛", race:"マキナ", cls:"マキナ", name: "クリスとクレア", lv:37, hp:928,
    str_base: 5, int_base: 5, mys_base: 5, vit_base: 20, agi_base: 20, luc_base:32,
    str_plus: 0, int_plus: 0, mys_plus: 3, vit_plus: 6, agi_plus: 6, luc_plus:9,
    str_bar: "", int_bar: "", mys_bar: "", vit_bar: "", agi_bar: "", luc_bar:"",
    str_sum: "", int_sum: "", mys_sum: "", vit_sum: "", agi_sum: "", luc_sum:"",
    str_r_a: 3, int_r_a: 0, mys_r_a: 0, vit_r_a: 0, agi_r_a: 0, luc_r_a:0, e_r_a:"闇天使の槍＋６", atk_ra:339,
    str_l_a: 0, int_l_a: 0, mys_l_a: 3, vit_l_a: 0, agi_l_a: 0, luc_l_a:0, e_l_a:"闇天使のメイス＋６", atk_la:271,
  },
  {
    id: 3, order:"30", pos:"後衛", race:"ヒューマン", cls:"ヒーラー", name: "セリナ", lv:38, hp:918,
    str_base: 9, int_base: 9, mys_base: 27, vit_base: 20, agi_base: 9, luc_base:17,
    str_plus: 0, int_plus: 0, mys_plus: 21, vit_plus: 0, agi_plus: 0, luc_plus:1,
    str_bar: "", int_bar: "", mys_bar: "", vit_bar: "", agi_bar: "", luc_bar:"",
    str_sum: "", int_sum: "", mys_sum: "", vit_sum: "", agi_sum: "", luc_sum:"",
    str_r_a: 0, int_r_a: 0, mys_r_a: 3, vit_r_a: 0, agi_r_a: 0, luc_r_a:1, e_r_a:"聖者のメイス＋１０", atk_ra:209,
    str_l_a: 0, int_l_a: 2, mys_l_a: 2, vit_l_a: 0, agi_l_a: 2, luc_l_a:2, e_l_a:"イーシルの御鏡", atk_la:0,
  },
  {
    id: 4, order:"51", pos:"", race:"", cls:"", name: "", lv:0, hp:0,
    str_base: 0, int_base: 0, mys_base: 0, vit_base: 0, agi_base: 0, luc_base:0,
    str_plus: 0, int_plus: 0, mys_plus: 0, vit_plus: 0, agi_plus: 0, luc_plus:0,
    str_bar: "", int_bar: "", mys_bar: "", vit_bar: "", agi_bar: "", luc_bar:"",
    str_sum: "", int_sum: "", mys_sum: "", vit_sum: "", agi_sum: "", luc_sum:"",
    str_r_a: 0, int_r_a: 0, mys_r_a: 0, vit_r_a: 0, agi_r_a: 0, luc_r_a:0, e_r_a:"", atk_ra:0,
    str_l_a: 0, int_l_a: 0, mys_l_a: 0, vit_l_a: 0, agi_l_a: 0, luc_l_a:0, e_l_a:"", atk_la:0,
  },
  {
    id: 5, order:"52", pos:"", race:"", cls:"", name: "", lv:0, hp:0,
    str_base: 0, int_base: 0, mys_base: 0, vit_base: 0, agi_base: 0, luc_base:0,
    str_plus: 0, int_plus: 0, mys_plus: 0, vit_plus: 0, agi_plus: 0, luc_plus:0, 
    str_bar: "", int_bar: "", mys_bar: "", vit_bar: "", agi_bar: "", luc_bar:"",
    str_sum: "", int_sum: "", mys_sum: "", vit_sum: "", agi_sum: "", luc_sum:"",
    str_r_a: 0, int_r_a: 0, mys_r_a: 0, vit_r_a: 0, agi_r_a: 0, luc_r_a:0, e_r_a:"", atk_ra:0,
    str_l_a: 0, int_l_a: 0, mys_l_a: 0, vit_l_a: 0, agi_l_a: 0, luc_l_a:0, e_l_a:"", atk_la:0,
  },
  {
    id: 6, order:"70", pos:"", race:"", cls:"", name: "", lv:0, hp:0,
    str_base: 0, int_base: 0, mys_base: 0, vit_base: 0, agi_base: 0, luc_base:0,
    str_plus: 0, int_plus: 0, mys_plus: 0, vit_plus: 0, agi_plus: 0, luc_plus:0,
    str_bar: "", int_bar: "", mys_bar: "", vit_bar: "", agi_bar: "", luc_bar:"",
    str_sum: "", int_sum: "", mys_sum: "", vit_sum: "", agi_sum: "", luc_sum:"",
    str_r_a: 0, int_r_a: 0, mys_r_a: 0, vit_r_a: 0, agi_r_a: 0, luc_r_a:0, e_r_a:"", atk_ra:0,
    str_l_a: 0, int_l_a: 0, mys_l_a: 0, vit_l_a: 0, agi_l_a: 0, luc_l_a:0, e_l_a:"", atk_la:0,
  },
  {
    id: 7, order:"80", pos:"", race:"", cls:"", name: "", lv:0, hp:0,
    str_base: 0, int_base: 0, mys_base: 0, vit_base: 0, agi_base: 0, luc_base:0,
    str_plus: 0, int_plus: 0, mys_plus: 0, vit_plus: 0, agi_plus: 0, luc_plus:0,
    str_bar: "", int_bar: "", mys_bar: "", vit_bar: "", agi_bar: "", luc_bar:"",
    str_sum: "", int_sum: "", mys_sum: "", vit_sum: "", agi_sum: "", luc_sum:"",
    str_r_a: 0, int_r_a: 0, mys_r_a: 0, vit_r_a: 0, agi_r_a: 0, luc_r_a:0, e_r_a:"", atk_ra:0,
    str_l_a: 0, int_l_a: 0, mys_l_a: 0, vit_l_a: 0, agi_l_a: 0, luc_l_a:0, e_l_a:"", atk_la:0,
  },
  {
    id: 8, order:"90", pos:"", race:"", cls:"", name: "", lv:0, hp:0,
    str_base: 0, int_base: 0, mys_base: 0, vit_base: 0, agi_base: 0, luc_base:0,
    str_plus: 0, int_plus: 0, mys_plus: 0, vit_plus: 0, agi_plus: 0, luc_plus:0,
    str_bar: "", int_bar: "", mys_bar: "", vit_bar: "", agi_bar: "", luc_bar:"",
    str_sum: "", int_sum: "", mys_sum: "", vit_sum: "", agi_sum: "", luc_sum:"",
    str_r_a: 0, int_r_a: 0, mys_r_a: 0, vit_r_a: 0, agi_r_a: 0, luc_r_a:0, e_r_a:"", atk_ra:0,
    str_l_a: 0, int_l_a: 0, mys_l_a: 0, vit_l_a: 0, agi_l_a: 0, luc_l_a:0, e_l_a:"", atk_la:0,
  },
]
console.log(JSON.stringify(default_data))
var data = default_data
let fileload_data = default_data

// ローカルストレージから取得
let json_data = localStorage.getItem('json')
json_data = JSON.parse(json_data)

// ローカルストレージの内容を反映する
if(json_data){
  for(let i in data){
    data[i].name = json_data[i]["name"]
    data[i].order = json_data[i]["order"]
    data[i].pos = json_data[i]["pos"]
    data[i].race = json_data[i]["race"]
    json_data[i]["cls"] ? data[i].cls = json_data[i]["cls"] : data[i].cls = ""
    data[i].name = json_data[i]["name"]
    data[i].lv = json_data[i]["lv"]
    data[i].hp = json_data[i]["hp"]
    data[i].e_r_a = json_data[i]["e_r_a"]
    data[i].e_l_a = json_data[i]["e_l_a"]
    data[i].atk_ra = json_data[i]["atk_ra"]
    data[i].atk_la = json_data[i]["atk_la"]
    data[i].str_base = json_data[i]["str_base"]
    data[i].str_plus = json_data[i]["str_plus"]
    data[i].str_r_a = json_data[i]["str_r_a"]
    data[i].str_l_a = json_data[i]["str_l_a"]
    data[i].int_base = json_data[i]["int_base"]
    data[i].int_plus = json_data[i]["int_plus"]
    data[i].int_r_a = json_data[i]["int_r_a"]
    data[i].int_l_a = json_data[i]["int_l_a"]
    data[i].mys_base = json_data[i]["mys_base"]
    data[i].mys_plus = json_data[i]["mys_plus"]
    data[i].mys_r_a = json_data[i]["mys_r_a"]
    data[i].mys_l_a = json_data[i]["mys_l_a"]
    data[i].vit_base = json_data[i]["vit_base"]
    data[i].vit_plus = json_data[i]["vit_plus"]
    data[i].vit_r_a = json_data[i]["vit_r_a"]
    data[i].vit_l_a = json_data[i]["vit_l_a"]
    data[i].agi_base = json_data[i]["agi_base"]
    data[i].agi_plus = json_data[i]["agi_plus"]
    data[i].agi_r_a = json_data[i]["agi_r_a"]
    data[i].agi_l_a = json_data[i]["agi_l_a"]
    data[i].luc_base = json_data[i]["luc_base"]
    data[i].luc_plus = json_data[i]["luc_plus"]
    data[i].luc_r_a = json_data[i]["luc_r_a"]
    data[i].luc_l_a = json_data[i]["luc_l_a"]
  }
}

// 算出項目に値をセット
const CalcStatus = () => {
  for(let i in data){
    data[i].str_sum = parseInt(data[i].str_base) + parseInt(data[i].str_plus) + parseInt(data[i].str_r_a) + parseInt(data[i].str_l_a)
    data[i].int_sum = parseInt(data[i].int_base) + parseInt(data[i].int_plus) + parseInt(data[i].int_r_a) + parseInt(data[i].int_l_a)
    data[i].mys_sum = parseInt(data[i].mys_base) + parseInt(data[i].mys_plus) + parseInt(data[i].mys_r_a) + parseInt(data[i].mys_l_a)
    data[i].vit_sum = parseInt(data[i].vit_base) + parseInt(data[i].vit_plus) + parseInt(data[i].vit_r_a) + parseInt(data[i].vit_l_a)
    data[i].agi_sum = parseInt(data[i].agi_base) + parseInt(data[i].agi_plus) + parseInt(data[i].agi_r_a) + parseInt(data[i].agi_l_a)
    data[i].luc_sum = parseInt(data[i].luc_base) + parseInt(data[i].luc_plus) + parseInt(data[i].luc_r_a) + parseInt(data[i].luc_l_a)
    data[i].str_bar = CreateProgress( data[i].str_base, parseInt(data[i].str_plus) + parseInt(data[i].str_r_a) + parseInt(data[i].str_l_a) )
    data[i].int_bar = CreateProgress( data[i].int_base, parseInt(data[i].int_plus) + parseInt(data[i].int_r_a) + parseInt(data[i].int_l_a) )
    data[i].mys_bar = CreateProgress( data[i].mys_base, parseInt(data[i].mys_plus) + parseInt(data[i].mys_r_a) + parseInt(data[i].mys_l_a) )
    data[i].vit_bar = CreateProgress( data[i].vit_base, parseInt(data[i].vit_plus) + parseInt(data[i].vit_r_a) + parseInt(data[i].vit_l_a) )
    data[i].agi_bar = CreateProgress( data[i].agi_base, parseInt(data[i].agi_plus) + parseInt(data[i].agi_r_a) + parseInt(data[i].agi_l_a) )
    data[i].luc_bar = CreateProgress( data[i].luc_base, parseInt(data[i].luc_plus) + parseInt(data[i].luc_r_a) + parseInt(data[i].luc_l_a) )
  }
}
CalcStatus()

// ローカルストレージに保存
const UpdateLocalStrage = (_data) => {
  let json_data = []
  for(let i in _data){
    json_data.push({
      id: _data[i].id, order: _data[i].order, pos: _data[i].pos, race: _data[i].race, cls: _data[i].cls, name: _data[i].name, lv: _data[i].lv, hp: _data[i].hp,
      e_r_a: _data[i].e_r_a, atk_ra: _data[i].atk_ra, e_l_a: _data[i].e_l_a, atk_la: _data[i].atk_la,
      str_base: _data[i].str_base, str_plus: _data[i].str_plus, str_r_a: _data[i].str_r_a, str_l_a: _data[i].str_l_a,
      int_base: _data[i].int_base, int_plus: _data[i].int_plus, int_r_a: _data[i].int_r_a, int_l_a: _data[i].int_l_a,
      mys_base: _data[i].mys_base, mys_plus: _data[i].mys_plus, mys_r_a: _data[i].mys_r_a, mys_l_a: _data[i].mys_l_a,
      vit_base: _data[i].vit_base, vit_plus: _data[i].vit_plus, vit_r_a: _data[i].vit_r_a, vit_l_a: _data[i].vit_l_a,
      agi_base: _data[i].agi_base, agi_plus: _data[i].agi_plus, agi_r_a: _data[i].agi_r_a, agi_l_a: _data[i].agi_l_a,
      luc_base: _data[i].luc_base, luc_plus: _data[i].luc_plus, luc_r_a: _data[i].luc_r_a, luc_l_a: _data[i].luc_l_a,
    })
  }
  localStorage.removeItem('json')
  localStorage.setItem('json', JSON.stringify(json_data))
  console.log("Save to LocalStrage:" + json_data[2].order)
}
UpdateLocalStrage(data)

const UpdateData = (row) => {
  data[parseInt(row.id)-1].order = row.order
  data[parseInt(row.id)-1].pos = row.pos
  data[parseInt(row.id)-1].race = row.race
  data[parseInt(row.id)-1].cls = row.cls
  data[parseInt(row.id)-1].name = row.name
  data[parseInt(row.id)-1].lv = row.lv
  data[parseInt(row.id)-1].hp = row.hp
  data[parseInt(row.id)-1].e_r_a = row.e_r_a
  data[parseInt(row.id)-1].e_l_a = row.e_l_a
  data[parseInt(row.id)-1].atk_ra = row.atk_ra
  data[parseInt(row.id)-1].atk_la = row.atk_la
  data[parseInt(row.id)-1].str_base = row.str_base
  data[parseInt(row.id)-1].str_plus = row.str_plus
  data[parseInt(row.id)-1].str_r_a = row.str_r_a
  data[parseInt(row.id)-1].str_l_a = row.str_l_a
  data[parseInt(row.id)-1].int_base = row.int_base
  data[parseInt(row.id)-1].int_plus = row.int_plus
  data[parseInt(row.id)-1].int_r_a = row.int_r_a
  data[parseInt(row.id)-1].int_l_a = row.int_l_a
  data[parseInt(row.id)-1].mys_base = row.mys_base
  data[parseInt(row.id)-1].mys_plus = row.mys_plus
  data[parseInt(row.id)-1].mys_r_a = row.mys_r_a
  data[parseInt(row.id)-1].mys_l_a = row.mys_l_a
  data[parseInt(row.id)-1].vit_base = row.vit_base
  data[parseInt(row.id)-1].vit_plus = row.vit_plus
  data[parseInt(row.id)-1].vit_r_a = row.vit_r_a
  data[parseInt(row.id)-1].vit_l_a = row.vit_l_a
  data[parseInt(row.id)-1].agi_base = row.agi_base
  data[parseInt(row.id)-1].agi_plus = row.agi_plus
  data[parseInt(row.id)-1].agi_r_a = row.agi_r_a
  data[parseInt(row.id)-1].agi_l_a = row.agi_l_a
  data[parseInt(row.id)-1].luc_base = row.luc_base
  data[parseInt(row.id)-1].luc_plus = row.luc_plus
  data[parseInt(row.id)-1].luc_r_a = row.luc_r_a
  data[parseInt(row.id)-1].luc_l_a = row.luc_l_a
  UpdateLocalStrage(data)
}

const columns = [
  { dataField: 'id', text: 'ID', headerAlign: 'center', headerStyle: {width: '1px'}, editable: false, hidden:true, },
  { dataField: 'order', text: 'Sort',   headerAlign: 'center', headerStyle: {width: '1px'}, align: 'center', sort: true, hidden:true, },
  { dataField: 'pos',   text: '配置',   headerAlign: 'center', headerStyle: {width: '2px'}, align: 'center', },
  { dataField: 'race',  text: '種族',   headerAlign: 'center', headerStyle: {width: '6px'}, align: 'center', },
  { dataField: 'cls',   text: 'クラス', headerAlign: 'center', headerStyle: {width: '6px'}, align: 'center', },
  { dataField: 'name',  text: '名前',   headerAlign: 'center', headerStyle: {width: '9px'}, align: 'center', },
  { dataField: 'lv',    text: 'Lv',     headerAlign: 'center', headerStyle: {width: '1px'}, align: 'center', },
  { dataField: 'hp',    text: 'HP',     headerAlign: 'center', headerStyle: {width: '2px'}, align: 'right', },
  { dataField: 'str_sum', text: 'STR', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'center', editable: false,
    formatter: (cell, row) =>{ return parseInt(row.str_base) + parseInt(row.str_plus) + parseInt(row.str_r_a) + parseInt(row.str_l_a); },
  },
  { dataField: 'str_bar', text: '', headerAlign: 'center', headerStyle: {width: '6px',}, align: 'right', editable: false,
    formatter: (cell, row) =>{ return CreateProgress( parseInt(row.str_base), parseInt(row.str_plus) + parseInt(row.str_r_a) + parseInt(row.str_l_a) ); }
  },
  { dataField: 'str_base', text: 'ｷｬﾗ', headerAlign: 'center', headerStyle: {width: '3px'}, align: 'right', hidden:true, },
  { dataField: 'str_plus', text: '装備', headerAlign: 'center', headerStyle: {width: '3px'}, align: 'right', hidden:true, },
  { dataField: 'int_sum', text: 'INT', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'center', editable: false,
    formatter: (cell, row) =>{ return parseInt(row.int_base) + parseInt(row.int_plus) + parseInt(row.int_r_a) + parseInt(row.int_l_a); },
  },
  { dataField: 'int_bar', text: '', headerAlign: 'center', headerStyle: {width: '6px',}, align: 'right', editable: false,
    formatter: (cell, row) =>{ return CreateProgress( parseInt(row.int_base), parseInt(row.int_plus) + parseInt(row.int_r_a) + parseInt(row.int_l_a) ); }
  },
  { dataField: 'int_base', text: 'ｷｬﾗ', headerAlign: 'center', headerStyle: {width: '3px'}, align: 'right', hidden:true, },
  { dataField: 'int_plus', text: '装備', headerAlign: 'center', headerStyle: {width: '3px'}, align: 'right', hidden:true, },
  { dataField: 'mys_sum', text: 'MYS', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'center', editable: false,
    formatter: (cell, row) =>{ return parseInt(row.mys_base) + parseInt(row.mys_plus) + parseInt(row.mys_r_a) + parseInt(row.mys_l_a); }
  },
  { dataField: 'mys_bar', text: '', headerAlign: 'center', headerStyle: {width: '6px',}, align: 'right', editable: false,
    formatter: (cell, row) =>{ return CreateProgress( parseInt(row.mys_base), parseInt(row.mys_plus) + parseInt(row.mys_r_a) + parseInt(row.mys_l_a) ); }
  },
  { dataField: 'mys_base', text: 'ｷｬﾗ', headerAlign: 'center', headerStyle: {width: '3px'}, align: 'right', hidden:true, },
  { dataField: 'mys_plus', text: '装備', headerAlign: 'center', headerStyle: {width: '3px'}, align: 'right', hidden:true, },
  { dataField: 'vit_sum', text: 'VIT', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'center', editable: false, 
    formatter: (cell, row) =>{ return parseInt(row.vit_base) + parseInt(row.vit_plus) + parseInt(row.vit_r_a) + parseInt(row.vit_l_a); }
  },
  { dataField: 'vit_bar', text: '', headerAlign: 'center', headerStyle: {width: '6px',}, align: 'right', editable: false, 
    formatter: (cell, row) =>{ return CreateProgress( parseInt(row.vit_base), parseInt(row.vit_plus) + parseInt(row.vit_r_a) + parseInt(row.vit_l_a) ); }
  },
  { dataField: 'vit_base', text: 'ｷｬﾗ', headerAlign: 'center', headerStyle: {width: '3px'}, align: 'right', hidden:true, },
  { dataField: 'vit_plus', text: '装備', headerAlign: 'center', headerStyle: {width: '3px'}, align: 'right', hidden:true, },
  { dataField: 'agi_sum', text: 'AGI', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'center', editable: false, 
    formatter: (cell, row) =>{ return parseInt(row.agi_base) + parseInt(row.agi_plus) + parseInt(row.agi_r_a) + parseInt(row.agi_l_a); }
  },
  { dataField: 'agi_bar', text: '', headerAlign: 'center', headerStyle: {width: '6px',}, align: 'right', editable: false, 
    formatter: (cell, row) =>{ return CreateProgress( parseInt(row.agi_base), parseInt(row.agi_plus) + parseInt(row.agi_r_a) + parseInt(row.agi_l_a) ); }
  },
  { dataField: 'agi_base', text: 'ｷｬﾗ', headerAlign: 'center', headerStyle: {width: '3px'}, align: 'right', hidden:true, },
  { dataField: 'agi_plus', text: '装備', headerAlign: 'center', headerStyle: {width: '3px'}, align: 'right', hidden:true, },
  { dataField: 'luc_sum', text: 'LUC', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'center', editable: false, 
    formatter: (cell, row) =>{ return parseInt(row.luc_base) + parseInt(row.luc_plus) + parseInt(row.luc_r_a) + parseInt(row.luc_l_a); }
  },
  { dataField: 'luc_bar', text: '', headerAlign: 'center', headerStyle: {width: '6px',}, align: 'right', editable: false, 
    formatter: (cell, row) =>{ return CreateProgress( parseInt(row.luc_base), parseInt(row.luc_plus) + parseInt(row.luc_r_a) + parseInt(row.luc_l_a) ); }
  },
  { dataField: 'luc_base', text: 'ｷｬﾗ', headerAlign: 'center', headerStyle: {width: '3px'}, align: 'right', hidden:true, },
  { dataField: 'luc_plus', text: '装備', headerAlign: 'center', headerStyle: {width: '3px'}, align: 'right', hidden:true, },
  { dataField: 'e_r_a', text: '右手', headerAlign: 'center', headerStyle: {width: '15px'}, align: 'center', },
  { dataField: 'atk_ra', text: '攻撃', headerAlign: 'center', headerStyle: {width: '3px'}, align: 'center', },
  { dataField: 'str_r_a', text: 'STR', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'right', hidden:true, },
  { dataField: 'int_r_a', text: 'INT', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'right', hidden:true, },
  { dataField: 'mys_r_a', text: 'MYS', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'right', hidden:true, },
  { dataField: 'vit_r_a', text: 'VIT', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'right', hidden:true, },
  { dataField: 'agi_r_a', text: 'AGI', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'right', hidden:true, },
  { dataField: 'luc_r_a', text: 'LUC', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'right', hidden:true, },
  { dataField: 'e_l_a', text: '左手', headerAlign: 'center', headerStyle: {width: '15px'}, align: 'center', },
  { dataField: 'atk_la', text: '攻撃', headerAlign: 'center', headerStyle: {width: '3px'}, align: 'center', },
  { dataField: 'str_l_a', text: 'STR', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'right', hidden:true, },
  { dataField: 'int_l_a', text: 'INT', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'right', hidden:true, },
  { dataField: 'mys_l_a', text: 'MYS', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'right', hidden:true, },
  { dataField: 'vit_l_a', text: 'VIT', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'right', hidden:true, },
  { dataField: 'agi_l_a', text: 'AGI', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'right', hidden:true, },
  { dataField: 'luc_l_a', text: 'LUC', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'right', hidden:true, },
];

function DgexTable() {
  // 状態を管理する
  const [val, setVal] = React.useState({
    modal001: false,
    snackbar001: false,
    snackbarTrns: undefined,
  });
  const handleOpen = () => setVal({ ...val, modal001: true });
  const handleClose = () => setVal({ ...val, modal001: false });
  
  //  クリップボードに保存する
  function copyTextToClipboard(_json) {
    navigator.clipboard.writeText(JSON.stringify(_json))
    .then( () => {
      console.error('Async: success')
    }, (err) => {
      console.error('Async: Could not copy text: ', err)
    });
  }
  // 列表示を一括で切り替える
  const PackageToggle = (onColumnToggle) => {
    // ON -> OFF
    onColumnToggle("hp")
    // OFF -> ON
    onColumnToggle("order")
    // ON -> OFF
    onColumnToggle("str_bar")
    onColumnToggle("int_bar")
    onColumnToggle("mys_bar")
    onColumnToggle("vit_bar")
    onColumnToggle("agi_bar")
    onColumnToggle("luc_bar")
    // OFF -> ON
    onColumnToggle("str_base")
    onColumnToggle("int_base")
    onColumnToggle("mys_base")
    onColumnToggle("vit_base")
    onColumnToggle("agi_base")
    onColumnToggle("luc_base")
    // OFF -> ON
    onColumnToggle("str_plus")
    onColumnToggle("int_plus")
    onColumnToggle("mys_plus")
    onColumnToggle("vit_plus")
    onColumnToggle("agi_plus")
    onColumnToggle("luc_plus")
    // ON -> OFF
    onColumnToggle("e_r_a")
    onColumnToggle("atk_ra")
    // OFF -> ON
    onColumnToggle("str_r_a")
    onColumnToggle("int_r_a")
    onColumnToggle("mys_r_a")
    onColumnToggle("vit_r_a")
    onColumnToggle("agi_r_a")
    onColumnToggle("luc_r_a")
    // ON -> OFF
    onColumnToggle("e_l_a")
    onColumnToggle("atk_la")
    // OFF -> ON
    onColumnToggle("str_l_a")
    onColumnToggle("int_l_a")
    onColumnToggle("mys_l_a")
    onColumnToggle("vit_l_a")
    onColumnToggle("agi_l_a")
    onColumnToggle("luc_l_a")
  };
  const CustomToggleList = ({
    columns,
    onColumnToggle,
    toggles
  }) => (
    <div>
      <p style={{margin: 0, padding: "4px 0px", border: 0, width: "100%", fontSize: "14px", textAlign:"center"}}>EDIT</p>
      {
        columns
          .map(column => ({
            ...column,
            toggle: toggles[column.dataField]
          }))
          .map(column => (
            column.dataField === "str_base" &&
            <button
              type="button"
              style={{marginTop: "0px", marginBottom: "4px", padding: 0, border: 0, width: "100%"}}
              key={ column.dataField }
              className=
              {
                `` 
              }
              onClick={ () => PackageToggle(onColumnToggle)}
            >
              { column.toggle ? <CheckOutlinedIcon /> : <EditIcon /> }
            </button>
          ))
      }
      <p style={{margin: 0, padding: "4px 0px", border: 0, width: "100%", fontSize: "14px", textAlign:"center"}}>LOAD</p>
      <button style={{marginTop: "0px", marginBottom: "4px", padding: 0, border: 0, width: "100%"}}>
        <label for="loadfile"><InputIcon />
          <input type="file" id="loadfile" accept="text/*" onChange={ () => onFileInputChange( document.querySelector('#loadfile') ) } />
        </label>
      </button>
      <p style={{margin: 0, padding: "4px 0px", border: 0, width: "100%", fontSize: "14px", textAlign:"center"}}>SAVE</p>
      <button type="button" id="savefile"
              style={{marginTop: "0px", marginBottom: "4px", padding: 0, border: 0, width: "100%"}}
              onClick={ () => SaveButtonClick( document.querySelector('#savefile') )}
      >
        { <SaveAltIcon />}
      </button>
      <button
        type="button" id="viewjson"
        style={{marginTop: "0px", marginBottom: "4px", padding: 0, border: 0, width: "100%"}}
        onClick={handleOpen}
      >
        { <AttachmentTwoToneIcon />}
      </button>
      <Modal
        open={val.modal001}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="div" component="body1">
              {<AssignmentTurnedInSharpIcon color="primary" />}
              SAVE : 下記のテキストを BOM無し UTF-8 で保存してください
          </Typography>
          <div id="modal-modal-description" style={{marginTop: "10px"}}>
            <textarea id="clipJson" name="kanso" rows="1" cols="68">
              {JSON.stringify(data)}
            </textarea>
          </div>
        </Box>
      </Modal>
    </div>
  );
  // ファイルを読み込む
  const onFileInputChange = (e) => {
    let fileList = e.files
    let reader = new FileReader()
    reader.readAsText(fileList[0])
    reader.onload = () => {
      // テキストからデータに変換してdataとローカルストレージを置き換える
      fileload_data = JSON.parse(reader.result)
      data = {}
      data = { ...fileload_data }
      CalcStatus()
      UpdateLocalStrage(data)
      // テーブルを書き換える
      const table = document.getElementById('mainBootstrapTable')
      RefreshTable( table, data )
    }
  };
  // ファイルを保存する
  const SaveButtonClick = (e) => {
    e.addEventListener('click', SaveButton(e) )
    e.removeEventListener('click', SaveButton)
  }
  function SaveButton (e) {
    const blob = new Blob([JSON.stringify(data)], {type: 'text/plain'})
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    document.body.appendChild(a)
    a.download = 'dgex-save.dat'
    a.href = url
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }
  // 要素を選択する
  function selectElm ( e ) {
    e.current.select()
  }
  const defaultSorted = [{
    dataField: 'order',
    order: 'asc'
  }]
  return (
    <ToolkitProvider
      keyField="id"
      data={ data }
      columns={ columns }
      columnToggle
    >{ props => (
      <Styles>
        <Box sx={{
          mx: 0, my: 0, px: 0, py:0,
          maxWidth: 1536,
          width: 1536,
          maxHeight: 216,
          height: 216,
          flexDirection: 'column',
          display: 'inline-block',
          overflow: 'hidden',
          bgcolor: 'grey.100'
        }}>
          <Box sx={{
            mx: 0, my: 0, px: 0, py:0,
            width: '3%',
            height: '100%',
            display: 'inline-block',
            overflow: 'hidden',
            bgcolor: 'grey.100'
          }}>
            <CustomToggleList { ...props.columnToggleProps } />
          </Box>
          <Box sx={{
            mx: 0, my: 0, px: 0, py:0,
            width: '97%',
            height: '100%',
            display: 'inline-block',
            overflow: 'hidden',
          }}>
            <BootstrapTable
              id="mainBootstrapTable"
              bootstrap4
              keyField='id'
              data={ data }
              columns={ columns }
              defaultSorted={ defaultSorted }
              cellEdit={cellEditFactory({
                mode: "dbclick",
                blurToSave: true,
                afterSaveCell: (oldValue, newValue, row, column) => {
                  // 算出項目の再描画
                  row.str_sum = parseInt(row.str_base) + parseInt(row.str_plus) + parseInt(row.str_r_a) + parseInt(row.str_l_a) ;
                  row.int_sum = parseInt(row.int_base) + parseInt(row.int_plus) + parseInt(row.int_r_a) + parseInt(row.int_l_a) ;
                  row.mys_sum = parseInt(row.mys_base) + parseInt(row.mys_plus) + parseInt(row.mys_r_a) + parseInt(row.mys_l_a) ;
                  row.vit_sum = parseInt(row.vit_base) + parseInt(row.vit_plus) + parseInt(row.vit_r_a) + parseInt(row.vit_l_a) ;
                  row.agi_sum = parseInt(row.agi_base) + parseInt(row.agi_plus) + parseInt(row.agi_r_a) + parseInt(row.agi_l_a) ;
                  row.luc_sum = parseInt(row.luc_base) + parseInt(row.luc_plus) + parseInt(row.luc_r_a) + parseInt(row.luc_l_a) ;
                  row.str_bar = CreateProgress( parseInt(row.str_base), parseInt(row.str_plus) + parseInt(row.str_r_a) + parseInt(row.str_l_a) );
                  row.int_bar = CreateProgress( parseInt(row.int_base), parseInt(row.int_plus) + parseInt(row.int_r_a) + parseInt(row.int_l_a) );
                  row.mys_bar = CreateProgress( parseInt(row.mys_base), parseInt(row.mys_plus) + parseInt(row.mys_r_a) + parseInt(row.mys_l_a) );
                  row.vit_bar = CreateProgress( parseInt(row.vit_base), parseInt(row.vit_plus) + parseInt(row.vit_r_a) + parseInt(row.vit_l_a) );
                  row.agi_bar = CreateProgress( parseInt(row.agi_base), parseInt(row.agi_plus) + parseInt(row.agi_r_a) + parseInt(row.agi_l_a) );
                  row.luc_bar = CreateProgress( parseInt(row.luc_base), parseInt(row.luc_plus) + parseInt(row.luc_r_a) + parseInt(row.luc_l_a) );
                  // ローカルストレージに変更を保存
                  UpdateData(row);
                }
              })}
              { ...props.baseProps }
            />
          </Box>
        </Box>
      </Styles>
    )}</ToolkitProvider>
  );
}

export default DgexTable;
