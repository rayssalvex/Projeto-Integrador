import React, { useState } from 'react';
import './Add.css';
import { assets, url } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    author:"",
    page: "",
    status: true,
    description: "",
    price: "",
    category: "Infantil"
  });

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!image) {
      toast.error('Nenhuma imagem selecionada.');
      return null;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("author", data.author);
    formData.append("page", data.page);
    formData.append("status", data.status);
    formData.append("description", data.description);
    formData.append("price", Number(data.price.replace(',', '.'))); // Converter para número
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/book/add`, formData);
    if (response.data.success) {
      toast.success(response.data.message);
      setData({
        name: "",
        author:"",
        page:"",
        status: true,
        description: "",
        price: "",
        category: data.category
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
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className='add-img-upload flex-col'>
          <p>Upload image</p>
          <input onChange={(e) => { setImage(e.target.files[0]); e.target.value = '' }} type="file" accept="image/*" id="image" hidden />
          <label htmlFor="image">
            <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" />
          </label>
        </div>
        <div className='add-product-name flex-col'>
          <p>Nome do Livro</p>
          <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Digite aqui o nome do livro' required />
        </div>
        <div className='add-author-name flex-col'>
          <p>Nome do Autor</p>
          <input name='author' onChange={onChangeHandler} value={data.author} type="text" placeholder='Digite o nome do autor aqui' required />
        </div>
        <div className='add-product-name flex-col'>
          <p>Páginas do livro</p>
          <input name='page' onChange={onChangeHandler} value={data.page} type="text" placeholder='Digite aqui o número de páginas' required />
        </div>
        <div className='add-product-status flex-col'>
          <p>Visível no site</p>
          <label className='toggle-switch'>
            <input name='status' type='checkbox' checked={data.status} onChange={onChangeHandler} />
            <span className='slider'></span>
          </label>
        </div>
        <div className='add-product-description flex-col'>
          <p>Descrição do livro</p>
          <textarea name='description' onChange={onChangeHandler} value={data.description} type="text" rows={6} placeholder='Escreva aqui a sinopse' required />
        </div>
        <div className='add-category-price'>
          <div className='add-category flex-col'>
            <p>Categoria do livro</p>
            <select name='category' onChange={onChangeHandler} >
              <option value="Infantil">Infantil</option>
              <option value="Romance">Romance</option>
              <option value="Fantasia">Fantasia</option>
              <option value="Terror">Terror</option>
              <option value="Suspense">Suspense</option>
              <option value="Outros">Outros</option>
            </select>
          </div>
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

export default Add;
