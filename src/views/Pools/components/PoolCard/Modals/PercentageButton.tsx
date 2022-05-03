import React from 'react'
import styled from 'styled-components'
import { Button } from '@soy-libs/uikit2'

interface PercentageButtonProps {
  onClick: () => void
  disabled?: boolean
}

const StyledButton = styled(Button)`
  flex-grow: 1;
`

const PercentageButton: React.FC<PercentageButtonProps> = ({ children, onClick, disabled }) => {
  if (disabled) {
    return (
      <StyledButton scale="xs" mx="2px" p="4px 16px" variant="tertiary" disabled onClick={onClick}>
        {children}
      </StyledButton>
    )
  }
  return (
    <StyledButton scale="xs" mx="2px" p="4px 16px" variant="tertiary" onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default PercentageButton
