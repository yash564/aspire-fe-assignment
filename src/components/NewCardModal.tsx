import { Button, Form, Input, message, Modal } from 'antd'
import type { FC } from 'react'
import AspireLogo from '../assets/svg/aspire.svg?react'
import VisaLogo from '../assets/svg/VisaLogo.svg?react'
import { useForm } from 'antd/es/form/Form'
import { useCardContext } from '../contexts/CardContext'

type NewCardModalProps = {
  open: boolean
  onCancel: VoidFunction
}

type FormValues = {
  name: string
}

const Ellipses = () => (
  <div className="flex gap-[6px]">
    {Array(4)
      .fill(0)
      .map((_, idx) => (
        <div key={idx} className="w-[9px] h-[9px] rounded-full bg-white" />
      ))}
  </div>
)

const NewCardModal: FC<NewCardModalProps> = ({ open, onCancel }) => {
  const { addCard } = useCardContext()
  const [form] = useForm()

  const handleAddCard = (values: FormValues) => {
    addCard(values.name)
    message.success('Card added!')
    onCancel()
  }

  return (
    <Modal open={open} onCancel={onCancel} title="Add new card" footer={null}>
      <Form form={form} preserve={false} onFinish={handleAddCard}>
        <div className="bg-primary text-white rounded-xl p-6 md:p-[27px] relative z-10 transition-all aspire-card">
          <div className="flex justify-end">
            <AspireLogo className="text-white w-[74px] h-[21px] md:w-[84px] md:h-6" />
          </div>
          <Form.Item name="name" rules={[{ required: true, message: 'Please enter your name!' }]}>
            <Input size="large" className="mt-6 font-bold" placeholder="Ex: John Doe..." />
          </Form.Item>
          <div className="text-sm flex gap-6 md:gap-[27px] mt-6 md:mt-[27px] items-center">
            <Ellipses />
            <Ellipses />
            <Ellipses />
            <Ellipses />
          </div>
          <div className="flex text-[13px] mt-3.5 md:mt-[17px] gap-[40px] md:gap-[44px] font-bold">
            <span>Thru: ** / **</span>
            <div className="flex gap-1">
              <span>CVV:</span>
              <span className="font-bold tracking-[5px]">***</span>
            </div>
          </div>
          <div className="flex justify-end">
            <VisaLogo />
          </div>
        </div>
        <div className="text-right mt-3">
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </div>
      </Form>
    </Modal>
  )
}

export default NewCardModal
