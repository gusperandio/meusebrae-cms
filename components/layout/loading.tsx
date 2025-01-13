import { cn } from "@/lib/utils";
import styles from "@/styles/styles.module.scss";
export function Loader() {
  return (
    <div className={styles.banter_loader}>
      <div className={cn(styles.banter_loader__box, "before:bg-blue-600 dark:before:bg-white")}></div>
      <div className={cn(styles.banter_loader__box, "before:bg-blue-600 dark:before:bg-white")}></div>
      <div className={cn(styles.banter_loader__box, "before:bg-blue-600 dark:before:bg-white")}></div>
      <div className={cn(styles.banter_loader__box, "before:bg-blue-600 dark:before:bg-white")}></div>
      <div className={cn(styles.banter_loader__box, "before:bg-blue-600 dark:before:bg-white")}></div>
      <div className={cn(styles.banter_loader__box, "before:bg-blue-600 dark:before:bg-white")}></div>
      <div className={cn(styles.banter_loader__box, "before:bg-blue-600 dark:before:bg-white")}></div>
      <div className={cn(styles.banter_loader__box, "before:bg-blue-600 dark:before:bg-white")}></div>
      <div className={cn(styles.banter_loader__box, "before:bg-blue-600 dark:before:bg-white")}></div>
    </div>
  );
}
