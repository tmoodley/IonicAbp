import { Injector, ElementRef } from '@angular/core';
import { AppConsts } from './AppConsts';
import { LocalizationService } from 'abp-ng2-module/src/localization/localization.service';
import { PermissionCheckerService } from 'abp-ng2-module/src/auth/permission-checker.service';
import { FeatureCheckerService } from 'abp-ng2-module/src/features/feature-checker.service';
import { NotifyService } from 'abp-ng2-module/src/notify/notify.service';
import { SettingService } from 'abp-ng2-module/src/settings/setting.service';
import { MessageService } from 'abp-ng2-module/src/message/message.service';
import { AbpMultiTenancyService } from 'abp-ng2-module/src/multi-tenancy/abp-multi-tenancy.service';
import { AppSessionService } from './session/app-session.service';


export abstract class AppComponentBase {

    localizationSourceName = AppConsts.localization.defaultLocalizationSourceName;

    localization: LocalizationService;
    permission: PermissionCheckerService;
    feature: FeatureCheckerService;
    notify: NotifyService;
    setting: SettingService;
    message: MessageService;
    multiTenancy: AbpMultiTenancyService;
    appSession: AppSessionService;
    elementRef: ElementRef;

    constructor(injector: Injector) {
        this.localization = injector.get(LocalizationService);
        this.permission = injector.get(PermissionCheckerService);
        this.feature = injector.get(FeatureCheckerService);
        this.notify = injector.get(NotifyService);
        this.setting = injector.get(SettingService);
        this.message = injector.get(MessageService);
        this.multiTenancy = injector.get(AbpMultiTenancyService);
        this.appSession = injector.get(AppSessionService);
        this.elementRef = injector.get(ElementRef);
    }

    l(key: string, ...args: any[]): string {
        let localizedText = this.localization.localize(key, this.localizationSourceName);

        if (!localizedText) {
            localizedText = key;
        }

        if (!args || !args.length) {
            return localizedText;
        }

        args.unshift(localizedText);
        return abp.utils.formatString.apply(this, args);
    }

    isGranted(permissionName: string): boolean {
        return this.permission.isGranted(permissionName);
    }
}
