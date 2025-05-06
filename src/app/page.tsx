"use client";
import dynamic from "next/dynamic";
import { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import { useGlobalStore } from "@/store/global";
import { useSettingStore } from "@/store/setting";

const Header = dynamic(() => import("@/components/Internal/Header"));
const Setting = dynamic(() => import("@/components/Setting"));
const Topic = dynamic(() => import("@/components/Research/Topic"));
const Feedback = dynamic(() => import("@/components/Research/Feedback"));
const SearchResult = dynamic(
  () => import("@/components/Research/SearchResult")
);
const FinalReport = dynamic(() => import("@/components/Research/FinalReport"));
const History = dynamic(() => import("@/components/History"));
const Knowledge = dynamic(() => import("@/components/Knowledge"));

function Home() {
  const { t } = useTranslation();
  const {
    openSetting,
    setOpenSetting,
    openHistory,
    setOpenHistory,
    openKnowledge,
    setOpenKnowledge,
  } = useGlobalStore();

  const { theme } = useSettingStore();
  const { setTheme } = useTheme();

  useLayoutEffect(() => {
    const settingStore = useSettingStore.getState();
    setTheme(settingStore.theme);
  }, [theme, setTheme]);
  return (
    <div className="max-lg:max-w-screen-md max-w-screen-lg mx-auto px-4">
      <Header />
      <main>
      <p className="text-center text-muted-foreground my-4">
      项目介绍：目标是创建一个基于AI的研究助手，帮助用户更高效地进行研究。该助手将集成多种AI模型和搜索引擎，提供智能化的研究建议和结果分析。通过使用自然语言处理技术，助手能够理解用户的需求，并提供相关的信息和资源。最终目标是提高研究效率，帮助用户更好地完成研究任务。
      </p>
      <p className="text-center text-muted-foreground my-4">
      当前处于测试阶段，未实现账户同步配置，需要手动设置（配置一次即可）。
      1.点击右上角的设置按钮。
      2.api模式选择代理模式，服务可以选googleAI或deepseek。
      3.密码：lkai123
      4.点击“点击刷新模型”
      5.搜索设置建议选择启用。
      6.搜索服务如果使用googleai，则选择内置；如果是deepsek，则选择searxng。
      7.点击保存设置。
      </p>
        <Topic />
        <Feedback />
        <SearchResult />
        <FinalReport />
      </main>
      <footer className="my-4 text-center text-sm text-gray-600 print:hidden">
      </footer>
      <aside className="print:hidden">
        <Setting open={openSetting} onClose={() => setOpenSetting(false)} />
        <History open={openHistory} onClose={() => setOpenHistory(false)} />
        <Knowledge
          open={openKnowledge}
          onClose={() => setOpenKnowledge(false)}
        />
      </aside>
    </div>
  );
}

export default Home;
