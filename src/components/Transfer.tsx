interface Props {
  children?: React.ReactNode
}

const TransferButton = ({ children }: Props) => {
  return (
    <>
      <button className="btn btn-primary">Transfer</button>
    </>
  )
}

export default TransferButton
