import SwitchRouter, { SwitchOption } from '@/components/General/SwitchRouter';
import { PersonalForm, EducationForm } from '@/components/Pages/Register';
import {
  initialRegisterData,
  RegisterGroups,
  PersonalFields,
  EducationFields,
} from '@/definitions/Register/dataForm';
import api from '@/services/api';
import { FormMappers } from '@/utils/formUtils';
import { ReactComponent as Logo } from '@assets/logo.svg';
import { CenteredContainer, Header } from '@styles/general';
import { validateValues } from '@utils/validations';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';

const Register: React.FC = () => {
  const [validated, setValidated] = useState(false);

  const [data, setData] = useState(initialRegisterData);

  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const handlePersonalData = (name: PersonalFields, value: any) => {
    const invalidity = data.personal[name].validation(value);

    setData({
      ...data,
      personal: {
        ...data.personal,
        [name]: {
          ...data.personal[name],
          value,
          invalidity,
        },
      },
    });
  };

  const handleEducationData = (name: EducationFields, value: any) => {
    const invalidity = data.education[name].validation(value);

    setData({
      ...data,
      education: {
        ...data.education,
        [name]: {
          ...data.education[name],
          value,
          invalidity,
        },
      },
    });
  };

  const handleSelect = (event: React.FormEvent<HTMLSelectElement>) => {
    const { value, name } = event.currentTarget;

    handleEducationData(name as EducationFields, value);
  };

  const handleData = (
    event: React.ChangeEvent<HTMLInputElement>,
    group: RegisterGroups,
  ) => {
    const { value, name } = event.target;

    const dataHandler = {
      personal: () => handlePersonalData(name as PersonalFields, value),
      education: () => handleEducationData(name as EducationFields, value),
    };

    dataHandler[group]();
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setValidated(true);

    const errors = [
      ...validateValues(data.personal),
      ...validateValues(data.education),
    ];

    if (errors.length) {
      return errors.map((error) => toast.error(error));
    }

    setIsLoading(true);
    try {
      await api.post('/users', FormMappers.userFormToUserApi(data));

      toast.success('Cadastrado com sucesso');
      history.push('/login');
    } catch (err) {
      toast.error('Falha ao realizar cadastro, tente um email diferente');
    } finally {
      setIsLoading(false);
    }
  };

  const [activeTab, setActiveTab] = useState('Pessoal');

  const changeActiveTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  const educationOption: SwitchOption = {
    name: 'Educa????o',
    Component: (
      <EducationForm
        data={data.education}
        onChange={(event) => handleData(event, 'education')}
        onChangeSelect={handleSelect}
        onSubmit={() => handleSubmit}
        toValidated={validated}
        isLoading={isLoading}
      />
    ),
  };

  const personalOption: SwitchOption = {
    name: 'Pessoal',
    Component: (
      <PersonalForm
        data={data.personal}
        onChange={(event) => handleData(event, 'personal')}
        nextPage={() => changeActiveTab(educationOption.name)}
        toValidated={validated}
      />
    ),
  };

  return (
    <>
      <CenteredContainer onSubmit={handleSubmit}>
        <Logo />
        <Header>Crie sua conta</Header>
        <SwitchRouter
          firstOption={personalOption}
          secondOption={educationOption}
          activeTab={activeTab}
          changeTab={changeActiveTab}
        />
      </CenteredContainer>
    </>
  );
};

export default Register;
