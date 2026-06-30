import { useTheme } from '../../../contexts/ThemeContext';

/**
 * Toggle — interrupteur unifié : piste `accent` quand ON, `line` quand OFF ;
 * knob blanc qui glisse. Remplace les `<input type=checkbox peer>` codés en dur.
 */
interface ToggleProps {
  checked: boolean;
  onChange: (next: boolean) => void;
  id?: string;
  disabled?: boolean;
  'aria-label'?: string;
}

export function Toggle({ checked, onChange, id, disabled = false, ...rest }: ToggleProps) {
  const { palette } = useTheme();
  return (
    <button
      type="button"
      id={id}
      role="switch"
      aria-checked={checked}
      aria-label={rest['aria-label']}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className="relative inline-flex items-center rounded-full transition-colors shrink-0"
      style={{
        width: 44,
        height: 24,
        background: checked ? palette.accent : palette.line,
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      <span
        className="absolute rounded-full bg-white transition-transform"
        style={{
          width: 20,
          height: 20,
          top: 2,
          left: 2,
          transform: checked ? 'translateX(20px)' : 'translateX(0)',
          boxShadow: '0 1px 3px rgba(0,0,0,.3)',
        }}
      />
    </button>
  );
}
