import React from 'react';
import { string, number, func } from 'prop-types'; // library untuk memastikan kesesuaian tipe data kedua props (color dan id) di dalam komponen <Tile />
import './style.css';

const Tile = ({ color, id, onDoubleClick }) => {
  return (
    <div
      className="tile"
      style={{ backgroundColor: color }}
      id={id}
      onDoubleClick={onDoubleClick}
    />
  );
};

//----------------------  kita ingin memberikan nilai default terhadap properti color. hapus juga property isRequired pada propTypes
Tile.defaultProps = {
  color: 'gray',
};
//-------------------------------

//-------------------------------  menggunakan library yang sudah diimport diatas, untuk pengecekkan properti milik komponen <Tile />
Tile.propTypes = {
  id: number.isRequired, // isRequired memastikan property harus digunakan oleh komponen <Tile />
  color: string, // karena kita menggunakan nilai default terhadap properti color ('gray'), maka property isRequired harus dihapus
  onDoubleClick: func.isRequired,
};
//-------------------------------

export default Tile;
