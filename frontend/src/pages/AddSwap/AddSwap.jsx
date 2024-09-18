import React, { useState } from 'react';
import './AddSwap.css';
import { assets, url } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddSwap = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    status: true,
    description: "",
    price: "",
  });

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!image) {
      toast.error('Nenhuma imagem selecionada.');
      return null;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("status", data.status);
    formData.append("description", data.description);
    formData.append("price", Number(data.price.replace(',', '.'))); // Converter para número
    formData.append("image", image);
    const response = await axios.post(`${url}/api/swap/add`, formData);
    if (response.data.success) {
      toast.success(response.data.message);
      setData({
        name: "",
        status: true,
        description: "",
        price: "",
      });
      setImage(false);
    } else {
      toast.error(response.data.message);
    }
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    if (name === 'price') {
      // Remove todos os caracteres que não sejam números ou vírgula
      value = value.replace(/[^0-9,]/g, '');

      // Adiciona a vírgula para duas casas decimais
      const parts = value.split(',');
      if (parts[1] && parts[1].length > 2) {
        parts[1] = parts[1].substring(0, 2);
      }
      value = parts.join(',');

      // Atualiza o valor formatado no estado
      setData(data => ({ ...data, [name]: value }));
    } else {
      setData(data => ({ ...data, [name]: value }));
    }
  };

  return (
    <div className='add-swap'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className='add-img-upload flex-col'>
          <p>Upload image</p>
          <input onChange={(e) => { setImage(e.target.files[0]); e.target.value = '' }} type="file" accept="image/*" id="image" hidden />
          <label htmlFor="image">
            <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" />
          </label>
        </div>
        <div className='add-product-name flex-col'>
          <p>Nome do livro</p>
          <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Digite aqui' required />
        </div>
        <div className='add-product-description flex-col'>
          <p>Descrição do estado do livro</p>
          <textarea name='description' onChange={onChangeHandler} value={data.description} type="text" rows={6} placeholder='Ex:Livro novo, usado, grifado etc..' required />
        </div>
        <div className='add-category-price'>
          <div className='add-price flex-col'>
            <p>Preço do produto (unit.)</p>
            <input type="text" name='price' onChange={onChangeHandler} value={data.price} placeholder='Ex: 25,00' />
          </div>
        </div>
        <button type='submit' className='add-btn'>Adicionar</button>
      </form>
    </div>
  );
};

export default AddSwap;