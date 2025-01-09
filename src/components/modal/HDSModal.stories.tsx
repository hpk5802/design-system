import { Meta, StoryObj } from '@storybook/react';
import HDSModal from './HDSModal';
import HDSButton from '../Button/HDSButton';
import Center from '../decorators/Center';
import useModal from '../../hooks/useModal';

const meta: Meta<typeof HDSModal> = {
  title: 'Components/HDSModal',
  component: HDSModal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      story: {
        iframeHeight: 500,
      },
    },
  },
  decorators: [(story) => <Center height={500}>{story()}</Center>],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'center'],
      description: '모달이 표시될 위치를 설정합니다.',
    },
    hasCloseBtn: {
      control: 'boolean',
      description: 'true일 경우, 모달에 닫기 버튼을 표시합니다.',
    },
    zIndex: {
      control: 'number',
      description: '모달의 z-index 값을 설정합니다.',
    },
    sort: {
      control: 'select',
      options: ['left', 'center'],
      description: '모달의 콘텐츠 정렬(left | center)을 설정합니다.',
    },
    header: {
      control: 'text',
      description: '헤더(타이틀 영역) 내용, 최대 2줄 노출(말 줄임 처리)',
    },
    body: { control: 'object', description: '바디(콘텐츠 영역) 내용' },
    footer: { control: 'object', description: '푸터(버튼 영역) 내용' },
    isOpen: { control: 'boolean' },
    handleClose: {
      action: 'clicked',
      description: '모달을 닫을 때 발생하는 액션입니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof HDSModal>;

const FooterWithCloseButton = ({
  handleClose,
}: {
  handleClose: () => void;
}) => (
  <HDSButton
    block
    size="md"
    radius="sm"
    handleClick={() => {
      alert('확인');
      handleClose();
    }}
  >
    확인
  </HDSButton>
);

const FooterWithCloseButtons = ({
  handleClose,
}: {
  handleClose: () => void;
}) => (
  <>
    <HDSButton
      block
      size="md"
      radius="sm"
      colorScheme="secondaryButton"
      handleClick={() => {
        alert('취소');
        handleClose();
      }}
    >
      취소
    </HDSButton>
    <HDSButton
      block
      size="md"
      radius="sm"
      handleClick={() => {
        alert('확인');
        handleClose();
      }}
    >
      확인
    </HDSButton>
  </>
);

export const Default: Story = {
  args: {
    position: 'center',
    header: '모달 헤더',
    body: <div>모달 바디</div>,
  },
  render: function Render(args) {
    const { isOpen, openModal, closeModal } = useModal();

    return (
      <>
        <HDSButton radius="md" handleClick={openModal}>
          모달 열기
        </HDSButton>
        <HDSModal {...args} isOpen={isOpen} handleClose={closeModal} />
      </>
    );
  },
};

export const WithoutCloseBtn: Story = {
  args: {
    ...Default.args,
    hasCloseBtn: false,
  },
  render: function Render(args) {
    const { isOpen, openModal, closeModal } = useModal();

    return (
      <>
        <HDSButton radius="md" handleClick={openModal}>
          모달 열기
        </HDSButton>
        <HDSModal
          {...args}
          isOpen={isOpen}
          handleClose={closeModal}
          footer={<FooterWithCloseButtons handleClose={closeModal} />}
        />
      </>
    );
  },
};

export const PositionTop: Story = {
  args: {
    position: 'top',
    header: '모달 헤더',
    body: <div>모달 바디</div>,
  },
  render: function Render(args) {
    const { isOpen, openModal, closeModal } = useModal();

    return (
      <>
        <HDSButton radius="md" handleClick={openModal}>
          모달 열기
        </HDSButton>
        <HDSModal {...args} isOpen={isOpen} handleClose={closeModal} />
      </>
    );
  },
};

export const PositionBottom: Story = {
  args: {
    position: 'bottom',
    header: '모달 헤더',
    body: <div>모달 바디</div>,
  },
  render: function Render(args) {
    const { isOpen, openModal, closeModal } = useModal();

    return (
      <>
        <HDSButton radius="md" handleClick={openModal}>
          모달 열기
        </HDSButton>
        <HDSModal {...args} isOpen={isOpen} handleClose={closeModal} />
      </>
    );
  },
};

export const AlignCenter: Story = {
  args: {
    ...Default.args,
    sort: 'center',
  },
  render: function Render(args) {
    const { isOpen, openModal, closeModal } = useModal();

    return (
      <>
        <HDSButton radius="md" handleClick={openModal}>
          모달 열기
        </HDSButton>
        <HDSModal {...args} isOpen={isOpen} handleClose={closeModal} />
      </>
    );
  },
};

export const WithoutHeader: Story = {
  args: {
    body: <div>헤더 없는 모달</div>,
    hasCloseBtn: false,
  },
  render: function Render(args) {
    const { isOpen, openModal, closeModal } = useModal();

    return (
      <>
        <HDSButton radius="md" handleClick={openModal}>
          모달 열기
        </HDSButton>
        <HDSModal {...args} isOpen={isOpen} handleClose={closeModal} />
      </>
    );
  },
};

export const WithFooterButton: Story = {
  args: {
    position: 'center',
    header: '모달 헤더',
    body: <div>모달 바디</div>,
  },
  render: function Render(args) {
    const { isOpen, openModal, closeModal } = useModal();

    return (
      <>
        <HDSButton radius="md" handleClick={openModal}>
          모달 열기
        </HDSButton>
        <HDSModal
          {...args}
          isOpen={isOpen}
          handleClose={closeModal}
          footer={<FooterWithCloseButton handleClose={closeModal} />}
        />
      </>
    );
  },
};

export const WithFooterButtons: Story = {
  args: {
    position: 'center',
    header: '모달 헤더',
    body: <div>모달 바디</div>,
  },
  render: function Render(args) {
    const { isOpen, openModal, closeModal } = useModal();

    return (
      <>
        <HDSButton radius="md" handleClick={openModal}>
          모달 열기
        </HDSButton>
        <HDSModal
          {...args}
          isOpen={isOpen}
          handleClose={closeModal}
          footer={<FooterWithCloseButtons handleClose={closeModal} />}
        />
      </>
    );
  },
};
