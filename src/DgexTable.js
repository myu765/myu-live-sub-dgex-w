import * as React from 'react';
import Box from '@mui/material/Box';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import EditIcon from '@mui/icons-material/Edit';
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
`
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

const default_data = [
  {
    id: 1, order:1, pos:"前衛", race:"ヒューマン", cls:"デモンゲイザー", name: "オズ", lv:37, hp:937,
    str_base: 21, int_base: 9, mys_base: 9, vit_base: 20, agi_base: 9, luc_base:22,
    str_plus: 7, int_plus: 0, mys_plus: 0, vit_plus: 5, agi_plus: 0, luc_plus:0,
    str_bar: "", int_bar: "", mys_bar: "", vit_bar: "", agi_bar: "", luc_bar:"",
    str_sum: "", int_sum: "", mys_sum: "", vit_sum: "", agi_sum: "", luc_sum:"",
    str_r_a: 3, int_r_a: 0, mys_r_a: 0, vit_r_a: 0, agi_r_a: 0, luc_r_a:3, e_r_a:"聖剣デモンスレイン＋２２", atk_ra:509,
    str_l_a: 0, int_l_a: 0, mys_l_a: 0, vit_l_a: 0, agi_l_a: 0, luc_l_a:0, e_l_a:"守護天使の書", atk_la:0,
  },
  {
    id: 2, order:2, pos:"前衛", race:"マキナ", cls:"マキナ", name: "クリスとクレア", lv:37, hp:928,
    str_base: 5, int_base: 5, mys_base: 5, vit_base: 20, agi_base: 20, luc_base:32,
    str_plus: 0, int_plus: 0, mys_plus: 3, vit_plus: 6, agi_plus: 6, luc_plus:9,
    str_bar: "", int_bar: "", mys_bar: "", vit_bar: "", agi_bar: "", luc_bar:"",
    str_sum: "", int_sum: "", mys_sum: "", vit_sum: "", agi_sum: "", luc_sum:"",
    str_r_a: 3, int_r_a: 0, mys_r_a: 0, vit_r_a: 0, agi_r_a: 0, luc_r_a:0, e_r_a:"闇天使の槍＋６", atk_ra:339,
    str_l_a: 0, int_l_a: 0, mys_l_a: 3, vit_l_a: 0, agi_l_a: 0, luc_l_a:0, e_l_a:"闇天使のメイス＋６", atk_la:271,
  },
  {
    id: 3, order:10, pos:"後衛", race:"ヒューマン", cls:"ヒーラー", name: "セリナ", lv:38, hp:918,
    str_base: 9, int_base: 9, mys_base: 27, vit_base: 20, agi_base: 9, luc_base:17,
    str_plus: 0, int_plus: 0, mys_plus: 21, vit_plus: 0, agi_plus: 0, luc_plus:1,
    str_bar: "", int_bar: "", mys_bar: "", vit_bar: "", agi_bar: "", luc_bar:"",
    str_sum: "", int_sum: "", mys_sum: "", vit_sum: "", agi_sum: "", luc_sum:"",
    str_r_a: 0, int_r_a: 0, mys_r_a: 3, vit_r_a: 0, agi_r_a: 0, luc_r_a:1, e_r_a:"聖者のメイス＋１０", atk_ra:209,
    str_l_a: 0, int_l_a: 2, mys_l_a: 2, vit_l_a: 0, agi_l_a: 2, luc_l_a:2, e_l_a:"イーシルの御鏡", atk_la:0,
  },
  {
    id: 4, order:11, pos:"", race:"", cls:"", name: "", lv:0, hp:0,
    str_base: 0, int_base: 0, mys_base: 0, vit_base: 0, agi_base: 0, luc_base:0,
    str_plus: 0, int_plus: 0, mys_plus: 0, vit_plus: 0, agi_plus: 0, luc_plus:0,
    str_bar: "", int_bar: "", mys_bar: "", vit_bar: "", agi_bar: "", luc_bar:"",
    str_sum: "", int_sum: "", mys_sum: "", vit_sum: "", agi_sum: "", luc_sum:"",
    str_r_a: 0, int_r_a: 0, mys_r_a: 0, vit_r_a: 0, agi_r_a: 0, luc_r_a:0, e_r_a:"", atk_ra:0,
    str_l_a: 0, int_l_a: 0, mys_l_a: 0, vit_l_a: 0, agi_l_a: 0, luc_l_a:0, e_l_a:"", atk_la:0,
  },
  {
    id: 5, order:12, pos:"", race:"", cls:"", name: "", lv:0, hp:0,
    str_base: 0, int_base: 0, mys_base: 0, vit_base: 0, agi_base: 0, luc_base:0,
    str_plus: 0, int_plus: 0, mys_plus: 0, vit_plus: 0, agi_plus: 0, luc_plus:0, 
    str_bar: "", int_bar: "", mys_bar: "", vit_bar: "", agi_bar: "", luc_bar:"",
    str_sum: "", int_sum: "", mys_sum: "", vit_sum: "", agi_sum: "", luc_sum:"",
    str_r_a: 0, int_r_a: 0, mys_r_a: 0, vit_r_a: 0, agi_r_a: 0, luc_r_a:0, e_r_a:"", atk_ra:0,
    str_l_a: 0, int_l_a: 0, mys_l_a: 0, vit_l_a: 0, agi_l_a: 0, luc_l_a:0, e_l_a:"", atk_la:0,
  },
  {
    id: 6, order:21, pos:"", race:"", cls:"", name: "", lv:0, hp:0,
    str_base: 0, int_base: 0, mys_base: 0, vit_base: 0, agi_base: 0, luc_base:0,
    str_plus: 0, int_plus: 0, mys_plus: 0, vit_plus: 0, agi_plus: 0, luc_plus:0,
    str_bar: "", int_bar: "", mys_bar: "", vit_bar: "", agi_bar: "", luc_bar:"",
    str_sum: "", int_sum: "", mys_sum: "", vit_sum: "", agi_sum: "", luc_sum:"",
    str_r_a: 0, int_r_a: 0, mys_r_a: 0, vit_r_a: 0, agi_r_a: 0, luc_r_a:0, e_r_a:"", atk_ra:0,
    str_l_a: 0, int_l_a: 0, mys_l_a: 0, vit_l_a: 0, agi_l_a: 0, luc_l_a:0, e_l_a:"", atk_la:0,
  },
  {
    id: 7, order:22, pos:"", race:"", cls:"", name: "", lv:0, hp:0,
    str_base: 0, int_base: 0, mys_base: 0, vit_base: 0, agi_base: 0, luc_base:0,
    str_plus: 0, int_plus: 0, mys_plus: 0, vit_plus: 0, agi_plus: 0, luc_plus:0,
    str_bar: "", int_bar: "", mys_bar: "", vit_bar: "", agi_bar: "", luc_bar:"",
    str_sum: "", int_sum: "", mys_sum: "", vit_sum: "", agi_sum: "", luc_sum:"",
    str_r_a: 0, int_r_a: 0, mys_r_a: 0, vit_r_a: 0, agi_r_a: 0, luc_r_a:0, e_r_a:"", atk_ra:0,
    str_l_a: 0, int_l_a: 0, mys_l_a: 0, vit_l_a: 0, agi_l_a: 0, luc_l_a:0, e_l_a:"", atk_la:0,
  },
  {
    id: 8, order:23, pos:"", race:"", cls:"", name: "", lv:0, hp:0,
    str_base: 0, int_base: 0, mys_base: 0, vit_base: 0, agi_base: 0, luc_base:0,
    str_plus: 0, int_plus: 0, mys_plus: 0, vit_plus: 0, agi_plus: 0, luc_plus:0,
    str_bar: "", int_bar: "", mys_bar: "", vit_bar: "", agi_bar: "", luc_bar:"",
    str_sum: "", int_sum: "", mys_sum: "", vit_sum: "", agi_sum: "", luc_sum:"",
    str_r_a: 0, int_r_a: 0, mys_r_a: 0, vit_r_a: 0, agi_r_a: 0, luc_r_a:0, e_r_a:"", atk_ra:0,
    str_l_a: 0, int_l_a: 0, mys_l_a: 0, vit_l_a: 0, agi_l_a: 0, luc_l_a:0, e_l_a:"", atk_la:0,
  },
]
let data = default_data

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
// ローカルストレージに保存
const UpdateLocalStrage = (data) => {
  let json_data = []
  for(let i in data){
    json_data.push({
      id: data[i].id, order: data[i].order, pos: data[i].pos, race: data[i].race, name: data[i].name, lv: data[i].lv, hp: data[i].hp,
      e_r_a: data[i].e_r_a, atk_ra: data[i].atk_ra, e_l_a: data[i].e_l_a, atk_la: data[i].atk_la,
      str_base: data[i].str_base, str_plus: data[i].str_plus, str_r_a: data[i].str_r_a, str_l_a: data[i].str_l_a,
      int_base: data[i].int_base, int_plus: data[i].int_plus, int_r_a: data[i].int_r_a, int_l_a: data[i].int_l_a,
      mys_base: data[i].mys_base, mys_plus: data[i].mys_plus, mys_r_a: data[i].mys_r_a, mys_l_a: data[i].mys_l_a,
      vit_base: data[i].vit_base, vit_plus: data[i].vit_plus, vit_r_a: data[i].vit_r_a, vit_l_a: data[i].vit_l_a,
      agi_base: data[i].agi_base, agi_plus: data[i].agi_plus, agi_r_a: data[i].agi_r_a, agi_l_a: data[i].agi_l_a,
      luc_base: data[i].luc_base, luc_plus: data[i].luc_plus, luc_r_a: data[i].luc_r_a, luc_l_a: data[i].luc_l_a,
    })
  }
  localStorage.setItem('json', JSON.stringify(json_data))
}
UpdateLocalStrage(data)

const UpdateData = (row) => {
  data[parseInt(row.id)-1].order = row.order
  data[parseInt(row.id)-1].pos = row.pos
  data[parseInt(row.id)-1].race = row.race
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
  { dataField: 'cls',   text: 'クラス', headerAlign: 'center', headerStyle: {width: '7px'}, align: 'center', },
  { dataField: 'name',  text: '名前',   headerAlign: 'center', headerStyle: {width: '9px'}, align: 'center', },
  { dataField: 'lv',    text: 'Lv',     headerAlign: 'center', headerStyle: {width: '1px'}, align: 'center', },
  { dataField: 'hp',    text: 'HP',     headerAlign: 'center', headerStyle: {width: '1px'}, align: 'right', },
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
  { dataField: 'atk_ra', text: '攻撃', headerAlign: 'center', headerStyle: {width: '3px'}, align: 'right', },
  { dataField: 'str_r_a', text: 'STR', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'right', hidden:true, },
  { dataField: 'int_r_a', text: 'INT', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'right', hidden:true, },
  { dataField: 'mys_r_a', text: 'MYS', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'right', hidden:true, },
  { dataField: 'vit_r_a', text: 'VIT', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'right', hidden:true, },
  { dataField: 'agi_r_a', text: 'AGI', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'right', hidden:true, },
  { dataField: 'luc_r_a', text: 'LUC', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'right', hidden:true, },
  { dataField: 'e_l_a', text: '左手', headerAlign: 'center', headerStyle: {width: '15px'}, align: 'center', },
  { dataField: 'atk_la', text: '攻撃', headerAlign: 'center', headerStyle: {width: '3px'}, align: 'right', },
  { dataField: 'str_l_a', text: 'STR', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'right', hidden:true, },
  { dataField: 'int_l_a', text: 'INT', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'right', hidden:true, },
  { dataField: 'mys_l_a', text: 'MYS', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'right', hidden:true, },
  { dataField: 'vit_l_a', text: 'VIT', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'right', hidden:true, },
  { dataField: 'agi_l_a', text: 'AGI', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'right', hidden:true, },
  { dataField: 'luc_l_a', text: 'LUC', headerAlign: 'center', headerStyle: {width: '1px'}, align: 'right', hidden:true, },
];

function DgexTable() {
  const PackageToggle = (onColumnToggle,row) => {
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
              style={{padding: 0, border: 0, width: "100%", height: "13.4em"}}
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
    </div>
  );

  const defaultSorted = [{
    dataField: 'sort',
    order: 'asc'
  }];

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
                  console.log(row.luc_r_a)
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
